// Coupons
const coupons = [
    "Food",
    "Clothes",
    "Toys",
];

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const inputDiscounte = document.getElementById("InputDiscount");
    const discountValue = inputDiscounte.value;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "";

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
      default:
        discount = 0;
        resultP.innerText = "El cupón de descuento ingresado no es válido o no fue ingresado.";
      break;
    }
    if(discount<discountValue){
      discount = discountValue;
    }
  
    const priceDiscount = calculateDiscounte(priceValue, discount);
  
    resultP.innerText = resultP.innerText + "\nEl precio con descuento son: $" + priceDiscount;
    console.log(priceDiscount);
  }

// Discontes
function calculateDiscounte(precie, discounte){
    return((precie * (100 - discounte))/100);
}