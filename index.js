const userInput = prompt(
  "List some froyo flavours separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function convertUserInputToArray(userInput) {
  return userInput.split(",");
}

const froyoFlavours = convertUserInputToArray(userInput);

const flavourCounter = {};
for (let i = 0; i < froyoFlavours.length; i++) {
  const flavour = froyoFlavours[i];

  if (flavour in flavourCounter) {
    flavourCounter[flavour] += 1;
  } else {
    flavourCounter[flavour] = 1;
  }
}

console.log(flavourCounter);
