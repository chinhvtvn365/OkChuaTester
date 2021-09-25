function getData(callback) {
  fetch("./data.json")
    .then(function (res) {
      return res.json();
    })
    .then(callback)
}

function start(){
  getData(function(data){
    var listOrder = data.Order.filter(checkId => checkId.id === 1)
    console.log(listOrder);
    const orderDetail = listOrder.map(order => {
        return `
        <div class="row">
        <div class="col-12">
            <h3>Order Detail</h3>
        </div>
        <div class="col-5">
            <p>Order Number</p>
        </div>
        <div class="col-7">
            <p>${order.orderNumber}</p>
            <p class="blockquote">${order.orderNumber_sub}</p>
        </div>
        <div class="col-5">
            <p>Items</p>
        </div>
        <div class="col-7">
            <p>${order.item1}</p>
            <p class="blockquote">${order.item1_sub}</p>
            <p>${order.item2}</p>
            <p class="blockquote">${order.item2_sub}</p>
        </div>
        <div class="col-5">
            <p>Name</p>
        </div>
        <div class="col-7">
            <p>${order.name}</p>
        </div>
        <div class="col-5">
            <p>Phone</p>
        </div>
        <div class="col-7">
            <p>${order.phone}</p>
        </div>
        <div class="col-5">
            <p>Email</p>
        </div>
        <div class="col-7">
            <p>${order.email}</p>
        </div>
        <div class="col-5">
            <p>Shipping Address</p>
        </div>
        <div class="col-7">
            <p class="shipping">${order.address}</p>
        </div>
    </div>
        `
    })
    document.querySelector('#right-container').innerHTML = orderDetail
  })
}
start()


