const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Print with while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Print with for loop
for(i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

// Print backwards with for loop
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
