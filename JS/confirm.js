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
      const confirmOrder = listOrder.map(order => {
          return `
          <div class="confirmation__timeShip d-flex align-items-center">
          <i class="material-icons"> schedule</i>
          <span>10 days delivery</span>
          <i class="material-icons">airport_shuttle </i>
          <span>DHL Express</span>
      </div>
      <div class="confirmation__products my-4">
          <p class="confirmation__products-name">${order.item1}</p>
          <p class="confirmation__products-price">${order.item1_sub}</p>
          <p class="confirmation__products-name">${order.item2}</p>
          <p class="confirmation__products-price">${order.item2_sub}</p>
      </div>
      <div class="confirmation__money row">
          <p class="col-5 ">Subtotal</p>
          <p class="col-7 ">Rp <span class="confirmation__money-subtotal">${order.subtotal}</span></p>
          <p class="col-5">Shipping Cost </p>
          <p class="col-7 ">Rp <span class="confirmation__money-ship">${order.shippingCost}</span>
          <p class="col-5 ">Packaging </p>
          <p class="col-7 ">Rp <span class="confirmation__money-packaging">${order.packaging}</span>
      </div>
      <div class="row confirmation__grandTotal my-2  my-md-4 py-2 py-md-3">
          <p class="col-5 ">Grand Total</p>
          <p class="col-7 confirmation__grandTotal-money">Rp <span
                  class="confirmation__money-subtotal">${order.subtotal + order.shippingCost + order.packaging}</span></p>
      </div>
      <div class="row confirmation__address">
          <p class="col-5 ">Shipping Address</p>
          <p class="col-7 ">${order.address}</p>
      </div>
          `
      })
      document.querySelector('.confirmation-right').innerHTML = confirmOrder
    })
  }
  start()
  
  
  