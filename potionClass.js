class Potion {
  constructor(color, volume) {
    this.color = color;   // [R, G, B]
    this.volume = volume; // number
  }

  mix(other) {
    const totalVolume = this.volume + other.volume;

    const mixedColor = this.color.map(
      (channel, i) =>
        Math.ceil(
          (channel * this.volume + other.color[i] * other.volume) / totalVolume
        )
    );

    return new Potion(mixedColor, totalVolume);
  }
}

// Example
const felix_felicis = new Potion([255, 255, 255], 7);
const shrinking_solution = new Potion([51, 102, 51], 12);
const new_potion = felix_felicis.mix(shrinking_solution);

console.log(new_potion.color);  // [127, 160, 127]
console.log(new_potion.volume); // 19
