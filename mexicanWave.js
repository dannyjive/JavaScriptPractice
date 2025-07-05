function wave(str) {
  const waveArr = [];

  for (let i = 0; i < str.length; i++) {
    if ( /\s/.test(str.slice(i, i + 1) || str.length === 0)) {
      continue;
    } else {
      waveArr.push(
        str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1)
      );
    }
  }
  return(waveArr);
}

wave("h e l l o");
wave("bye");
wave(" ")
