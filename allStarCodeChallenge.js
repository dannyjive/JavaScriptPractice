function strCount(str, letter){  
  return str.split('').reduce((acc, curr) => curr === letter ? acc + 1 : acc, 0);
}