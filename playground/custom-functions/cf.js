// function definition

function calculateBill() {
  // this is the function body
  console.log('Running calculate bill');
  const total = 100 * 1.13;
  return total;
}

// function call on run
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
