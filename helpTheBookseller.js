function stockList(books, categories) {
  if (!books.length || !categories.length) {
    return ""; // return empty string if either list is empty
  }

  // Step 1: Initialize totals
  const categoryTotals = {};
  for (let cat of categories) {
    categoryTotals[cat] = 0;
  }

  // Step 2: Accumulate quantities
  for (let i = 0; i < books.length; i++) {
    for (let cat in categoryTotals) {
      if (books[i][0] === cat) {
        const parts = books[i].split(" ");
        const qty = Number(parts[1]);
        categoryTotals[cat] += qty;
      }
    }
  }

  // Step 3: Format the result string
  const result = categories
    .map(cat => `(${cat} : ${categoryTotals[cat]})`)
    .join(" - ");

  return result;
}
