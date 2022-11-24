function pair(nombre){
  if(nombre%2 == 0)
              {
                console.log("Even");
                     return("Even");
              }
              else
              {
                  console.log("Odd");
                     return("Odd");
              }
         }
 
pair(14);

function OppositeNumber(a) {
console.log(returnOpposite(7));
  return (a * -1);
}

function stringRepeat(s, n) {
  res = "";
  for (let i = 0; i < n; i++) {
    res = res + s;
  }
console.log(stringRepeat("|", 6));
  return res;
}

function booleanConverter(b) {
  if (b) {
    ret = "Yes";
  }
  else {
    ret = "No";
  }
console.log(booleanConverter(false));
  return ret;
}

function firstAndLastCharacter(s) {
  lengthString = 0;
  for (let i = 0; i < s.length; i++) {
    lengthString++;
  }
  r = s.slice(1, lengthString - 1);
console.log(firstAndLastCharacter("Ceci est un test"));
  return r;
}

function vowelCountWithoutY(s) {
  nbVowel = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "A" || s.charAt(i) == "e" || s.charAt(i) == "E" || s.charAt(i) == "i" || s.charAt(i) == "I" || s.charAt(i) == "o" || s.charAt(i) == "O" || s.charAt(i) == "u" || s.charAt(i) == "U") {
      nbVowel++;
    }
  } 
console.log(vowelCountWithoutY("Syiiiiiiu"));
 return nbVowel;
}

