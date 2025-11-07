// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars

  // This is where the code you're actually experimenting with goes.

  /*const prompt = "Please enter your name, or 'Exit' to quit: ";
  let name = await input(prompt);

  while (name !== "Exit") {
    output("Hello, " + name + "!");
    name = await input(prompt);
  }*/

async function main() {

  const prompt = ("Enter the total coast of goods:");
  const totalCoast = Number(await input(prompt));

  const prompt2 = ("Enter the cash payment amount:");
  const cashPayment = Number(await input(prompt2));

  const prompt3 = ("Enter the discount code (0-5):");
  const discountCode = await input(prompt3);
  
  let discountPercentage;

  switch (discountCode) {
    case '0':
      discountPercentage = 0;
      break;
    case '1':
      discountPercentage = 10;
      break;
    case '2':
      discountPercentage = 15;
      break;
    case '3':
      discountPercentage = 25;
      break;
    case '4':
      discountPercentage = 35;
      break;
    case '5':
      discountPercentage = 40;
      break;
    default:
      alert("Invalid discount code. No discount will be applied.");
      discountPercentage = 0;
      break;
  }

  const discountAmount = (discountPercentage / 100) * totalCoast;
  const finalAmount = totalCoast - discountAmount;
  const change = cashPayment - finalAmount;

  if (change < 0) {
    output("Insufficient payment.");
  }
  else{
    output ("Change: $" + change.toFixed(2));
  }
}
