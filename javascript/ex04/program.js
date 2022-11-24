function firstAndLastCharacter(s) {
  lengthString = 0;
  for (let i = 0; i < s.length; i++) {
    lengthString++;
  }
  r = s.slice(1, lengthString - 1);
console.log(firstAndLastCharacter("Ceci est un test"));
  return r;
}
