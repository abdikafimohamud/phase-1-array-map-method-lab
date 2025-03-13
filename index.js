function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  });
}

// Example usage:
const broncosRecord = [
  { year: "2014", result: "L" },
  { year: "2015", result: "W" },
  { year: "2016", result: "L" }
];

console.log(superbowlWin(broncosRecord)); // Outputs: "2015"

const drivers = ["Sam", "Sarah", "Sally", "Samantha"];
console.log(findMatching(drivers, "sAm")); // Outputs: ["Sam"]
console.log(fuzzyMatch(drivers, "Sa")); // Outputs: ["Sam", "Sarah", "Sally"]

const driverObjects = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sam", hometown: "Nashville" },
  { name: "Sarah", hometown: "Los Angeles" }
];

console.log(matchName(driverObjects, "Sam")); // Outputs: [{ name: "Sam", hometown: "Nashville" }]

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

console.log(titleCased());

