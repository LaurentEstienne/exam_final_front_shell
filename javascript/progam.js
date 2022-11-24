function returnOpposite(a) {
  return (a * -1);
}

function stringRepeat(s, n) {
  res = "";
  for (let i = 0; i < n; i++) {
    res = res + s;
  }
  return res;
}

function booleanConverter(b) {
  if (b) {
    ret = "Yes";
  }
  else {
    ret = "No";
  }
  return ret;
}

function firstAndLastCharacter(s) {
  lengthString = 0;
  for (let i = 0; i < s.length; i++) {
    lengthString++;
  }
  r = s.slice(1, lengthString - 1);
  return r;
}

function vowelCountWithoutY(s) {
  nbVowel = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "A" || s.charAt(i) == "e" || s.charAt(i) == "E" || s.charAt(i) == "i" || s.charAt(i) == "I" || s.charAt(i) == "o" || s.charAt(i) == "O" || s.charAt(i) == "u" || s.charAt(i) == "U") {
      nbVowel++;
    }
  }
  return nbVowel;
}

console.log(returnOpposite(7));
console.log(stringRepeat("|", 6));
console.log(booleanConverter(false));
console.log(firstAndLastCharacter("Ceci est un test"));
console.log(vowelCountWithoutY("Syiiiiiiu"));
