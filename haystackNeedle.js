function findNeedle(haystack) {
  if (haystack.includes("needle")) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
  } else {
    return `no needle found.`;
  }
}
