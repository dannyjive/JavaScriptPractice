function isValidWalk(walk) {
  let north = walk.filter((north) => north === 'n')
  let south = walk.filter((south) => south === 's')
  let west = walk.filter((west) => west === 'w')
  let east = walk.filter((east) => east === 'e')
  
  
  if (walk.length === 10 && north.length === south.length && east.length === west.length){
    return true
    } else{
      return false;
    }
}