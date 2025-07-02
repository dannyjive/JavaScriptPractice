function countSmileys(arr) {
    const filteredFaces = arr.filter(face => /^[:;][-~]?[)D]$/.test(face));
  return filteredFaces.length;
}


countSmileys([':D',':~)',';~D',':)']) 