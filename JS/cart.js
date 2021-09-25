function Product(id, name, price, img1, img2, content, li1, li2, li3, movement, strap, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img1 = img1;
    this.img2 = img2;
    this.content = content;
    this.li1 = li1;
    this.li2 = li2;
    this.li3 = li3;
    this.movement = movement;
    this.strap = strap;
    this.size = size;
}

var card = [];

var product1 = new Product(1, "RA-NB0104S", 1000, "./Assets/cardImg/sp1.jpg", "./Assets/detailImage/sp1.1.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters.", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");
var product2 = new Product(2, "RA-AP0004S", 1200, "./Assets/cardImg/sp2.jpg", "./Assets/detailImage/sp2.2.jpg", "This sophisticated ORIENT 30mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "40.5mm");
card.push(
    {
        product: product1,
        quantity: 1,
        moneyTotal: product1.price,
    },
    {
        product: product2,
        quantity: 1,
        moneyTotal: product2.price,
    },
)
var renderCard = function () {
    var content = ""
    for (var i = 0; i < card.length; i++) {
        content += `
            <div class="card__item mb-5 d-flex flex-wrap align-items-center justify-content-between ">
                <div class="d-flex align-items-center">
                    <div class="py-3 px-4 mr-3 mr-sm-5 mb-4 card__item__img">
                        <img  src="${card[i].product.img1}" alt="">
                    </div>
                    <div>
                        <p class="card__item__name">${card[i].product.movement}, ${card[i].product.strap}, ${card[i].product.size}(${card[i].product.name})</p>
                        <p class="card__item__price">${card[i].product.price} <span>$</span></p>
                    </div>
                </div>
                <div class="">
                    <p class="m-0 d-flex align-items-center">
                        <button onclick="reduceQuantity(${card[i].product.id})" class="material-icons icon-except ">
                            remove
                        </button>
                        <span class="card__item-quantity mx-sm-3">${card[i].quantity}</span>
                        <button onclick="addQuantity(${card[i].product.id})"  class="material-icons icon-plus ">
                            add
                        </button>
                        <span class="ml-3 mr-2">Rp</span>
                        <span class="card__item-money mr-sm-3">${card[i].moneyTotal}</span>
                        <button onclick="showModal(${card[i].product.id})" data-toggle="modal" data-target="#exampleModal1" class="material-icons icon-delete">
                            delete
                        </button>
                    </p>
                </div>
            </div>
        `
    }
    document.querySelector(".card__items").innerHTML = content;
}
renderCard();
var addQuantity = function (id) {
    for (var j = 0; j < card.length; j++) {
        if (card[j].product.id == id) {
            card[j].quantity++;
            card[j].moneyTotal = card[j].quantity * card[j].product.price;
            renderCard();
        }
    }
}
var reduceQuantity = function (id) {
    for (var j = 0; j < card.length; j++) {
        if (card[j].product.id == id) {
            if (card[j].quantity == 1) {
                document.querySelector(".btn-showModal").click();
                document.querySelector(".btn-delete").onclick = function () {
                    deletePruduct(id)
                };
                return;
            } else {
                card[j].quantity--;
                card[j].moneyTotal = card[j].quantity * card[j].product.price;
                renderCard();
                return;
            }

        }
    }
}

var deletePruduct = function (id) {
    for (var j = 0; j < card.length; j++) {
        if (card[j].product.id == id) {
            card.splice(j, 1)
            renderCard();
        }
    }
}
var showModal = function (id) {
    document.querySelector(".btn-delete").onclick = function () {
        deletePruduct(id)
    };
}

// Chọn địa chỉ
var provinceList = [];
var districtList = [];
var wardtList = []
var showOption = function (data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        content += `<option value="${data[i].code}">${data[i].name}</option>`
    }
    return content;
}

var getDivisions = function () {
    var promise = axios({
        url: `https://provinces.open-api.vn/api/?depth=3`,
        method: "GET",
    });
    promise.then(function (res) {
        provinceList = res.data;
        var provinces = showOption(provinceList);
        document.querySelector(".provinces").innerHTML = provinces;
        var idProvince = document.querySelector(".provinces").value;
        filterDictricts(idProvince)
    });
    promise.catch(function (err) {
        console.log("err", err);
    });
}
getDivisions()
var filterDictricts = function (id) {
    var districtArr = []
    for (var i = 0; i < provinceList.length; i++) {
        if (provinceList[i].code == id) {
            districtArr = provinceList[i].districts;
            var districtsShow = showOption(districtArr)
            document.querySelector(".dictricts").innerHTML = districtsShow;
            var idDictrict = document.querySelector(".dictricts").value;
            filterWards(idDictrict, districtArr)
        }
    }
}

document.querySelector(".provinces").onchange = () => {
    var idProvince = document.querySelector(".provinces").value;
    filterDictricts(idProvince)
}

var filterWards = function (id, data) {
    var wardArr = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].code == id) {
            wardArr = data[i].wards
            var wardsShow = showOption(wardArr)
            document.querySelector(".wards").innerHTML = wardsShow;
        }

    }
}

document.querySelector(".dictricts").onchange = () => {
    var idProvince = document.querySelector(".provinces").value;
    var idDictrict = document.querySelector(".dictricts").value;
    var districtArr = []
    for (var i = 0; i < provinceList.length; i++) {
        if (provinceList[i].code == idProvince) {
            districtArr = provinceList[i].districts;
        }
    }
    filterWards(idDictrict, districtArr)
}


