const burgerPrice = 600;

if (burgerPrice > 500) {
  console.log("You get a free Coke!");
} else {
  console.log("You need to pay 30tk for Coke.");
}

const cokePrice = burgerPrice > 500 ? 0 : 30;
console.log(cokePrice);
