function calculateChaiIngredients(numberOfCups) {

    const waterPerCup = 200;
    const milkPerCup = 50;
    const majaniPerCup = 1;
    const sugarPerCup = 2;

    const water = waterPerCup * numberOfCups;
    const milk = milkPerCup * numberOfCups;
    const majani = majaniPerCup * numberOfCups;
    const sugar = sugarPerCup * numberOfCups;

    const outputDiv = document.getElementById("output");


    outputDiv.innerHTML += `To make ${numberOfCups} cups of Kenyan Chai, you will need:<br>`;
    outputDiv.innerHTML += `Water: ${water} ml<br>`;
    outputDiv.innerHTML += `Milk: ${milk} ml<br>`;
    outputDiv.innerHTML += `Tea Leaves (Majani): ${majani} tablespoons<br>`;
    outputDiv.innerHTML += `Sugar: ${sugar} teaspoons<br>`;
    outputDiv.innerHTML += `njoy your Chai Bora!<br>`;
}

// Ask the user for input, convert to number and run function
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);
calculateChaiIngredients(numberOfCups);
