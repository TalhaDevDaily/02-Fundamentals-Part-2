"use strict";

/////////////////////////////////////////////////////////////////
/////////////////////// JavaScript Fundamentals - Part 1
/*
//// Variables and Values
const country = "Bangladesh";
const continent = "Asia";
let population = 180000000;

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//// let, const and var
language = "Bangla";
// continent = "Europe";

//// Basic Operators && Strings and Template Literals
population /= 2;
population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

//// Taking Desicions: if / else Statements
let populationComparison;
if (averagePopulation > population) {
  populationComparison = `below`;
} else {
  populationComparison = `above`;
}

console.log(
  `${country}'s population is ${population} ${populationComparison} avarage`
);

//// Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log("123" < 570); // true
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
console.log(3 + +"3"); // 6
console.log(3 + Number("3")); // 6
console.log(typeof 3 + ""); // Unary version of String(3)


//// Equality Operators: == vs ===
const numNeighbours = Number(
  prompt(`How many neighbour countries does your country
have?`)
);
if (numNeighbours === 1) console.log(`Only ${numNeighbours} border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log(`No borders`);
// Using === strict equality helped check if both the value and the data type are number and numeric 1 respectively, where as the loose equality wasn't checking if the data type was a number or not, it was just making sure to validate the string '1' into the right answer no matter it's data type.
// Converting the data type into number using Number() function helped as both the data type and the value is a numeric, which help along side with the strict equalitys' === validation.


//// Logical Operators
if (language === "English" && population < 50000000 && isIsland)
  console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);

//// The swtich Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  case "hindi":
    console.log(`Number 4`);
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

//// The Conditional (Ternary) Operation
console.log(
  `${country}'s population is ${
    population > 33000000 ? `above` : "below"
  } average`
);
*/

/////////////////////////////////////////////////////////////////
/////////////////////// JavaScript Fundamentals - Part 2

//// Functions
function describeCountry(country, population, capitalCity) {
  const countryStatus = `${country} has ${population} people and it's capital city is ${capitalCity}`;
  return countryStatus;
}

const descriptionBangladesh = describeCountry("Bangladesh", 180000000, "Dhaka");
console.log(descriptionBangladesh);
const descriptionIreland = describeCountry("Ireland", 5300000, "Dublin");
console.log(descriptionIreland);
const descriptionPortugal = describeCountry("Portugal", 10400000, "Lisbon");
console.log(descriptionPortugal);

//// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const chinaPopulation = percentageOfWorld1(1441000000);
const irelandPopulation = percentageOfWorld1(5300000);
const bangladeshPopulation = percentageOfWorld1(180000000);

console.log(
  chinaPopulation.toFixed(1),
  irelandPopulation,
  bangladeshPopulation
);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const portugalPopulation = percentageOfWorld2(10400000);
const russiaPopulation = percentageOfWorld2(143000000);
const ukrainePopulation = percentageOfWorld2(38000000);

console.log(portugalPopulation, russiaPopulation, ukrainePopulation);

//// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900000000) * 100;

const polandPopulation = percentageOfWorld3(36000000);
const turkeyPopulation = percentageOfWorld3(85000000);
const southKoreaPopulation = percentageOfWorld3(51000000);

console.log(polandPopulation, turkeyPopulation, southKoreaPopulation);

//// Functions Calling Other Functions
const describePopulation = (country, population) =>
  `${country} has ${population} people, which is about ${percentageOfWorld1(
    population
  ).toFixed(1)}% of the world`;

console.log(describePopulation("China", 1441000000));
console.log(describePopulation("Ireland", 5300000));
console.log(describePopulation("Bangladesh", 180000000));

//// Introduction to Arrays
const population = [180000000, 5300000, 1441000000, 51000000];
console.log(population.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);

//// Basic Array Operation (Methods)
const neighbours = ["Poland", "Ukraine", "Norway"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
// console.log(
//   `Probably ${
//     neighbours.includes("Germany") ? "" : "not"
//   } a central European Country :D`
// );

neighbours[neighbours.indexOf("Norway")] = "Finland";
console.log(neighbours);

//// Introduction to Objects
const myCountry = {
  country: "Russia",
  capital: "Moscow",
  language: "russian",
  population: 143000000,
  neighbours: ["Poland", "Ukraine", "Norway"],
  describe: function () {
    return `${this.country} has ${this.population} ${this.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

console.log(myCountry);

//// Dots vs. Bracket Notation
console.log(
  `${myCountry["country"]} has ${myCountry["population"]} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

//// Object Methods
console.log(myCountry.describe());
myCountry.checkIsIsland();
console.log(myCountry.isIsland);

//// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

//// Looping Arrays, Breaking and Continuing
const populations = [180000000, 5300000, 1441000000, 51000000];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  function percentageOfWorld1() {
    return (populations[i] / 7900000000) * 100;
  }
  percentages2.push(percentageOfWorld1());
}

console.log(percentages2, percentages);
// The for Loop made it easier to shorten the code and kept the code dry; eliminating any additional repeatations

//// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
// My Solution
for (let i = 0; i < listOfNeighbours.length; i++) {
  const seperateGroups = listOfNeighbours[i];
  for (let i = 0; i < seperateGroups.length; i++) {
    console.log(`Neighbours: ${seperateGroups[i]}`);
  }
}

// Tutorial Solution
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbours: ${listOfNeighbours[i][y]}`);
  }
}

//// The while Loop
const populations2 = [180000000, 5300000, 1441000000, 51000000];
const percentages3 = [];

let i = 0;
while (i < populations2.length) {
  function percentageOfWorld1() {
    return (populations2[i] / 7900000000) * 100;
  }
  percentages3.push(percentageOfWorld1());
  i++;
}

console.log(percentages3, percentages2);

// The for loop is more preferred here. Because, we know before hand the number of iterations there needs to be, and in this case while loop just makes the process longer.
