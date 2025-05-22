// circle.radius = 2;
//circle.area = 20; read only

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.radius);
console.log(circle.area);
