let listArray = [
  {
    id: 1,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "Leather",
    moventment: "mechanical",
    price: 565,
    size: 27,
    image: "./Assets/productImage/Rec1.jpg"
  },
  {
    id: 2,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "Leather",
    moventment: "mechanical",
    price: 627,
    size: 32,
    image: "./Assets/productImage/Rec2.jpg"
  },
  {
    id: 3,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "Leather",
    moventment: "mechanical",
    price: 422,
    size: 32,
    image: "./Assets/productImage/Rec3.jpg"
  },
  {
    id: 4,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "Leather",
    moventment: "mechanical",
    price: 833,
    size: 32,
    image: "./Assets/productImage/Rec4.jpg"
  },
  {
    id: 5,
    name: "mechanical",
    codePd: "RA-KAO0002Y",
    strap: "Metal",
    moventment: "mechanical",
    price: 1577,
    size: 32,
    image: "./Assets/productImage/Rec5.jpg"
  },
  {
    id: 6,
    name: "mechanical",
    codePd: "RA-AP0004S",
    strap: "Metal",
    moventment: "mechanical",
    price: 100,
    size: 32,
    image: "./Assets/productImage/Rec6.jpg"
  },
  {
    id: 7,
    name: "quartz",
    codePd: "RA-KAO0002Y",
    strap: "Metal",
    moventment: "quartz",
    price: 312,
    size: 32.5,
    image: "./Assets/productImage/Rec7.jpg"
  },
  {
    id: 8,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "Metal",
    moventment: "quartz",
    price: 756,
    size: 32,
    image: "./Assets/productImage/Rec8.jpg"
  },
  {
    id: 9,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "Leather",
    moventment: "quartz",
    price: 912,
    size: 40.8,
    image: "./Assets/productImage/Rec9.jpg"
  },
  {
    id: 10,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "Leather",
    moventment: "quartz",
    price: 418,
    size: 40.8,
    image: "./Assets/productImage/Rec10.jpg"
  },
  {
    id: 11,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "Leather",
    moventment: "quartz",
    price: 312,
    size: 40.8,
    image: "./Assets/productImage/Rec11.jpg"
  },
  {
    id: 12,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "Leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec12.jpg"
  },
  {
    id: 13,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "Leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec13.jpg"
  },
  {
    id: 14,
    name: "quartz",
    codePd: "RA-AP0004S",
    strap: "Leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec14.jpg"
  },
  {
    id: 15,
    name: "quartz",
    codePd: "RA-AG0004B",
    strap: "Leather",
    moventment: "quartz",
    price: 1222,
    size: 40.8,
    image: "./Assets/productImage/Rec15.jpg"
  },
]

// let hihi = []
// function getData(callback) {
//   fetch("./data.json")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(callback)
// }
// function start(){
//   getData(function(data){
//     renderData(data.products)
//   })
// }
// start()

let sizes = []
let moventment = []
let prices = []
let straps = []

let inputTags = document.getElementsByTagName("input");
for (let i = 0; i < inputTags.length; i++) {
  inputTags[i].addEventListener("click", filterProducts);
}

function renderData(filteredArray) {
  const productArray = filteredArray.map(product => {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
    <div>
    <figure class="card card-product-grid">
        <div class="img-wrap item-zoom">                       
            <img  src=${product.image} alt="${product.name}" >
            <a href="detail.html"><div class="titleProduct">${product.name.charAt(0).toUpperCase() + product.name.slice(1)}, ${product.strap} Strap - ${product.size}mm (${product.codePd})</div> </a>
        </div>
        <button href="#" class="btnProduct button"><a href="detail.html">See more</a></button>
    </figure>
</div>
</div>
    `
  }).join('')
  document.querySelector('#allProducts').innerHTML = productArray
}

renderData(listArray)

function filterProducts() {
  let sizeFilter = filterSize()
  let strapFilter = filterStrap()
  let movFilter = filterMov()
  let priceFilter = filterPrice()

  let combinedFilter = [...sizeFilter, ...strapFilter, ...movFilter, ...priceFilter]

  sizeFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
    return sizeFilter.indexOf(n) !== -1
  })]
  strapFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
    return strapFilter.indexOf(n) !== -1
  })]
  movFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
    return movFilter.indexOf(n) !== -1
  })]
  priceFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
    return priceFilter.indexOf(n) !== -1
  })]

  finalFilter = [...new Set(combinedFilter.map(item => item))]
  renderData(finalFilter)
}

// render Size
function filterSize() {

  let checkedBoxValues = []
  let filterSize = document.querySelectorAll('input[name="size"]:checked')
  filterSize.forEach((size) => {
    checkedBoxValues.push(size.value)
  })
  sizes = [...checkedBoxValues]

  let filterBySize = listArray.filter((data) => {
    return sizes.some((size) => {
      switch (size) {
        case "-32":
          return data.size < 32
        case "32-40":
          return data.size >= 32 && data.size <= 40
        case "+40":
          return data.size > 40
      }
    })
  })
  return filterBySize
}

// render Strap
function filterStrap() {

  let checkedBoxValues = []
  let filterStrap = document.querySelectorAll('input[name="strap"]:checked')
  filterStrap.forEach((strap) => {
    checkedBoxValues.push(strap.value)
  })
  straps = [...checkedBoxValues]

  let filterByStrap = listArray.filter((data) => {
    return straps.some((strap) => {
      return data.strap === strap
    })
  })
  return filterByStrap
}

// render Strap
function filterMov() {

  let checkedBoxValues = []
  let filterMov = document.querySelectorAll('input[name="mov"]:checked')
  filterMov.forEach((mov) => {
    checkedBoxValues.push(mov.value)
  })
  moventment = [...checkedBoxValues]

  let filterByMov = listArray.filter((data) => {
    return moventment.some((mov) => {
      return data.moventment === mov
    })
  })
  return filterByMov
}

// render Price
function filterPrice() {

  let checkedBoxValues = []
  let filterPrices = document.querySelectorAll('input[name="price"]:checked')
  filterPrices.forEach((price) => {
    checkedBoxValues.push(price.value)
  })
  prices = [...checkedBoxValues]

  let filterByPrice = listArray.filter((data) => {
    return prices.some((price) => {
      switch (price) {
        case "-500":
          return data.price < 500
        case "500-1000":
          return data.price >= 500 && data.price <= 1000
        case "+1000":
          return data.price > 1000
      }
    })
  })
  return filterByPrice
}

// show product
const showProduct = document.getElementById('showProduct').onclick = function () {
  renderData(listArray)
}
