function enough(cap, on, wait) {

  console.log( Math.max(0, on + wait - cap));
}

enough(10, 5, 5)