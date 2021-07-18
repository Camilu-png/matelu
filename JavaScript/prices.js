// Coupons
const coupons = [
    "Food",
    "Clothes",
    "Toys",
];
const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let discount;
  
    switch(couponValue) {
      case "Food":
        discount = 15;
      break;
      case "Clothes":
        discount = 30;
      break;
      case "Toys":
        discount = 25;
      break;
    }
  
  
    const priceDiscount = calculateDiscounte(priceValue, discount);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + priceDiscount;
  }

// Discontes
function calculateDiscounte(){
    const input1 = document.getElementById("InputPrice");
    const precie = parseInt(input1.value);
    const discounte = document.getElementById("InputDiscounte");
    const precie = parseInt(input1.value);
    alert((precie * (100 - discounte))/100);
}