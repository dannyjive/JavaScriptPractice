// goal: use a sliding window and map to track characters.

var lengthOfLongestSubstring = function (s) {
  //start of window
  let left = 0;

  // maxLen = the best answer so far
  let maxLen = 0;

  // a map to store characters and their last seen index
  let map = {};

  //loop over characters with right
  for (let right = 0; right < s.length; right++) {
    //get current char
    const char = s[right];

    //have we seen this char before? AND is the index of this char greater than our left pointer? If both are yes, our window is now invalid.
    if (map.hasOwnProperty(char) && map[char] >= left) {
      // If window is invalid, move 'left' past the repeated occurrence so we can search from this point forward.
      left = map[char] + 1;
    }

    //update map to the most recent index of this character
    map[char] = right;

    //update maxLen with whichever is bigger, maxLen or right - left + 1
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
