function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// ✅ 1 second = 1000 milliseconds
// ✅ 1 minute = 60 seconds
// ✅ 1 hour = 60 minutes = 3600 seconds