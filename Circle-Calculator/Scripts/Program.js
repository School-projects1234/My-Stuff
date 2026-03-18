const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateRadius(diameter) {
  return diameter / 2;
}

function calculateDiameter(radius) {
  return radius * 2;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function clearScreen() {
  process.stdout.write('\x1b[2J\x1b[H');
}

function askQuestion(query) {
  return new Promise(resolve => readline.question(query, answer => resolve(answer)));
}

async function main() {
  console.log("What do you want to calculate?");
  console.log("1. Radius");
  console.log("2. Diameter");
  console.log("3. Circumference");
  let choice = parseInt(await askQuestion("Enter your choice (1-3): "));

  if (choice === 1) {
    clearScreen();
    console.log("Calculate radius from:");
    console.log("1. Diameter");
    console.log("2. Circumference");
    let sub_choice = parseInt(await askQuestion("Enter your choice (1-2): "));
    if (sub_choice === 1) {
      clearScreen();
      let diameter = parseFloat(await askQuestion("Enter the diameter: "));
      let radius = calculateRadius(diameter);
      clearScreen();
      console.log(`The radius is: ${radius.toFixed(2)}`);
    } else if (sub_choice === 2) {
      clearScreen();
      let circumference = parseFloat(await askQuestion("Enter the circumference: "));
      let radius = circumference / (2 * Math.PI);
      clearScreen();
      console.log(`The radius is: ${radius.toFixed(2)}`);
    } else {
      clearScreen();
      console.log("Invalid choice. Please try again.");
    }
  } else if (choice === 2) {
    clearScreen();
    console.log("Calculate diameter from:");
    console.log("1. Radius");
    console.log("2. Circumference");
    let sub_choice = parseInt(await askQuestion("Enter your choice (1-2): "));
    if (sub_choice === 1) {
      clearScreen();
      let radius = parseFloat(await askQuestion("Enter the radius: "));
      let diameter = calculateDiameter(radius);
      clearScreen();
      console.log(`The diameter is: ${diameter.toFixed(2)}`);
    } else if (sub_choice === 2) {
      clearScreen();
      let circumference = parseFloat(await askQuestion("Enter the circumference: "));
      let diameter = circumference / Math.PI;
      clearScreen();
      console.log(`The diameter is: ${diameter.toFixed(2)}`);
    } else {
      clearScreen();
      console.log("Invalid choice. Please try again.");
    }
  } else if (choice === 3) {
    clearScreen();
    console.log("Calculate circumference from:");
    console.log("1. Diameter");
    console.log("2. Radius");
    let sub_choice = parseInt(await askQuestion("Enter your choice (1-2): "));
    if (sub_choice === 1) {
      clearScreen();
      let diameter = parseFloat(await askQuestion("Enter the diameter: "));
      let circumference = calculateCircumference(diameter / 2);
      clearScreen();
      console.log(`The circumference is: ${circumference.toFixed(2)}`);
    } else if (sub_choice === 2) {
      clearScreen();
      let radius = parseFloat(await askQuestion("Enter the radius: "));
      let circumference = (radius * 2) * Math.PI;
      clearScreen();
      console.log(`The circumference is: ${circumference.toFixed(2)}`);
    } else {
      clearScreen();
      console.log("Invalid choice. Please try again");
    }
  } else {
    clearScreen();
    console.log("Invalid choice. Please try again");
  }
  readline.close();
}

main();
