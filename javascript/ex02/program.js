function stringRepeat(s, n) {
  res = "";
  for (let i = 0; i < n; i++) {
    res = res + s;
  }
console.log(stringRepeat("|", 6));
  return res;
}
