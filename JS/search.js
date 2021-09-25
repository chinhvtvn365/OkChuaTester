let listArray = [
  {
    id: 1,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "leather",
    moventment: "mechanical",
    price: 565,
    size: 27,
    image: "./Assets/productImage/Rec1.jpg"
  },
  {
    id: 2,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "leather",
    moventment: "mechanical",
    price: 627,
    size: 32,
    image: "./Assets/productImage/Rec2.jpg"
  },
  {
    id: 3,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "leather",
    moventment: "mechanical",
    price: 422,
    size: 32,
    image: "./Assets/productImage/Rec3.jpg"
  },
  {
    id: 4,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "leather",
    moventment: "mechanical",
    price: 833,
    size: 32,
    image: "./Assets/productImage/Rec4.jpg"
  },
  {
    id: 5,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "metal",
    moventment: "mechanical",
    price: 1577,
    size: 32,
    image: "./Assets/productImage/Rec5.jpg"
  },
  {
    id: 6,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "metal",
    moventment: "mechanical",
    price: 100,
    size: 32,
    image: "./Assets/productImage/Rec6.jpg"
  },
  {
    id: 7,
    name: "quartz",
    codePd: "RA-KAO0002Y",
    strap: "metal",
    moventment: "quartz",
    price: 312,
    size: 32.5,
    image: "./Assets/productImage/Rec7.jpg"
  },
  {
    id: 8,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "metal",
    moventment: "quartz",
    price: 756,
    size: 32,
    image: "./Assets/productImage/Rec8.jpg"
  },
  {
    id: 9,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "leather",
    moventment: "quartz",
    price: 912,
    size: 40.8,
    image: "./Assets/productImage/Rec9.jpg"
  },
  {
    id: 10,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "leather",
    moventment: "quartz",
    price: 418,
    size: 40.8,
    image: "./Assets/productImage/Rec10.jpg"
  },
  {
    id: 11,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "leather",
    moventment: "quartz",
    price: 312,
    size: 40.8,
    image: "./Assets/productImage/Rec11.jpg"
  },
  {
    id: 12,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec12.jpg"
  },
  {
    id: 13,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec13.jpg"
  },
  {
    id: 14,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec14.jpg"
  },
  {
    id: 15,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec15.jpg"
  },
]

var showProducts = document.getElementById("showProducts")
var allProducts = document.getElementById("allProducts")
var text_researcher = document.querySelector(".text_researcher")
var reseutlS = document.querySelector(".reseutlS")
var notFound = document.querySelector(".notFound")

function renderBySearch() {
  text_researcher.style.display = "none";
  var x = document.getElementById("userInputFilterByName").value.toLowerCase()
  reseutlS.innerHTML = `<p>Search results for "${x}"</p>`
  var listBySearch = listArray.filter((reseult) => {
    return reseult.name.includes(x) || reseult.strap.includes(x)
  })


  function render() {
    showProducts.innerHTML = `<div id="allProducts" class="row"></div>`
    for (let i = 0; i < listBySearch.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4 mt-4");
      listItem.innerHTML = `
                  <div>
                      <figure class="card card-product-grid">
                          <div class="img-wrap item-zoom">                       
                              <img  src=${listBySearch[i].image} alt="${listBySearch[i].name}" >
                              <a href="detail.html"><div class="titleProduct">${listBySearch[i].name.charAt(0).toUpperCase() + listBySearch[i].name.slice(1)}, ${listBySearch[i].strap.charAt(0).toUpperCase() + listBySearch[i].strap.slice(1)} Strap - ${listBySearch[i].size}mm (${listBySearch[i].codePd})</div></a>
                          </div>
                          <button href="#" class="btnProduct button"><a href="detail.html">See more</a></button>
                      </figure>
                  </div>
                  `;
      document.getElementById("allProducts").appendChild(listItem);
    }
  }
  render();

  if(listBySearch){
    notFound.style.display = "none"
  }
  if (listBySearch.length === 0) {
    return notFound.style.display = "block"
  }
  
}
var inputSearch = document.querySelector("#userInputFilterByName");
inputSearch.onkeyup= function(e) {
  if(e.which==13){
    renderBySearch()
  }
}


var closeInput = function () {
  document.querySelector("#userInputFilterByName").value="";
}