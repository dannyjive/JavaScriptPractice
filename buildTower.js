function towerBuilder(nFloors) {
  const tower = [];
  for (i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(i * 2 + 1);
    tower.push(spaces + stars + spaces);
  }
  return(tower);
}

towerBuilder(4);
