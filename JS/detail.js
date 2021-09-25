function Product(id, name, price, img1, img2, content, li1, li2, li3, movement, strap, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = {
        img1: img1,
        img2: img2
    };
    this.content = content;
    this.li1 = li1;
    this.li2 = li2;
    this.li3 = li3;
    this.movement = movement;
    this.strap = strap;
    this.size = size;
}
var product1 = new Product(1, "RA-NB0104S", 1000, "./Assets/detailImage/sp1.jpg", "./Assets/detailImage/sp1.1.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters.", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");
var product2 = new Product(2, "RA-NB0104S", 1200, "./Assets/detailImage/sp2.jpg", "./Assets/detailImage/sp2.2.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");
var product3 = new Product(3, "RA-NB0104S", 800, "./Assets/detailImage/sp3.jpg", "./Assets/detailImage/sp3.3.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");
var product4 = new Product(4, "RA-NB0104S", 1100, "./Assets/detailImage/sp4.jpg", "./Assets/detailImage/sp4.4.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");
var product5 = new Product(5, "RA-NB0104S", 900, "./Assets/detailImage/sp5.jpg", "./Assets/detailImage/sp5.5.jpg", "This sophisticated ORIENT 32mm mechanical watch showcases a stainless steel case and a stylish white dial.Complementing its sophisticated design are a stretched straight bar index and an hour markers of rhinestones on the dial.This model supports continuous running time of 40 hours and water resistance of 100 meters", "Case size (3H-9H): 32.0mm", "Stainless Steel Case", "Water Resistance 100m", "Mechanical", " Leather", "32.0mm");


var productList = [product1, product2, product3, product4, product5]

var productSuggestList = [product2, product3, product4, product5];
function showProduct(id) {
    for (var i = 0; i < productList.length; i++) {
        if (id == productList[i].id) {
            var product = productList[i];
            document.querySelector(".product__imgShow").src = product.image.img1;
            document.querySelector(".product__img1").src = product.image.img1;
            document.querySelector(".product__img2").src = product.image.img2;
            document.querySelector(".product__content").innerHTML = product.content;
            document.querySelector(".product__price").innerHTML = product.price;
            document.querySelector(".product__li1").innerHTML = product.li1;
            document.querySelector(".product__li2").innerHTML = product.li2;
            document.querySelector(".product__li3").innerHTML = product.li3;
            document.querySelector(".title__movement").innerHTML = product.movement;
            document.querySelector(".title__strap").innerHTML = product.strap;
            document.querySelector(".title__size").innerHTML = product.size;
            document.querySelector(".title__name").innerHTML = product.name;
            document.querySelector(".product__img1").onclick=function(){
                showIMG(product.image.img1) // dia chi src
            };
            document.querySelector(".product__img2").onclick=function(){
                showIMG(product.image.img2)
            };
        }

    }



}
showProduct(1);

function showProductSuggest() {
    content = "";
    for (var i = 0; i < productSuggestList.length; i++) {
        content += `
        <div onclick= "showProduct(${productSuggestList[i].id})" class="col-6 col-md-3 ">
            <img class="w-100 mb-3" src="${productSuggestList[i].image.img1}" alt="">
            <p class="productDetails">${productSuggestList[i].movement}, ${productSuggestList[i].strap} - ${productSuggestList[i].size} (${productSuggestList[i].name})</p>
        </div>
        `
    }
    document.querySelector(".productSuggestList").innerHTML = content;


}
showProductSuggest();

 function showIMG(src){
 document.querySelector(".product__imgShow").src =src;
 // Do dl vao product__imgShow
 // .src lay dl tu =src
  
 }
 
 function changeColor() {
    var btn_addToCart = document.querySelector(".btn_addToCart");
    btn_addToCart.classList.toggle("bgAdd");
  }



















