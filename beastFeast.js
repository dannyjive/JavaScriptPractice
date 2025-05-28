function feast(beast, dish) {
  let firstBeastChar = beast[0];
  let lastBeastChar = beast[beast.length - 1];
  let firstDishChar = dish[0];
  let lastDishChar = dish[dish.length - 1];

  return firstBeastChar === firstDishChar && lastBeastChar === lastDishChar;
}
