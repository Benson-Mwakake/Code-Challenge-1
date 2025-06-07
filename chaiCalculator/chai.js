function calculateChaiIngredients(numberOfCups) {

    const waterPerCup = 200;
    const milkPerCup = 50;
    const majaniPerCup = 1;
    const sugarPerCup = 2;

    const water = waterPerCup * numberOfCups;
    const milk = milkPerCup * numberOfCups;
    const majani = majaniPerCup * numberOfCups;
    const sugar = sugarPerCup * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${majani} tablespoons`);
    console.log(`Sugar: ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

// Ask the user for input, convert to number and run function
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);
calculateChaiIngredients(numberOfCups);
