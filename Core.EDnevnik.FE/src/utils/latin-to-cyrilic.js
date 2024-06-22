const latinToCyrillic = {
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  C: "Ц",
  c: "ц",
  D: "Д",
  d: "д",
  E: "Е",
  e: "е",
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Х",
  h: "х",
  I: "И",
  i: "и",
  J: "Ј",
  j: "ј",
  K: "К",
  k: "к",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  Q: "Љ",
  q: "љ",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  W: "Џ",
  w: "џ",
  X: "КС",
  x: "кс",
  Y: "Ј",
  y: "ј",
  Z: "З",
  z: "з",
};

const latinToCyrillicText = (inputText) => {
  let outputText = "";
  for (let char of inputText) {
    if (latinToCyrillic.hasOwnProperty(char)) {
      outputText += latinToCyrillic[char];
    } else {
      outputText += char;
    }
  }
  return outputText;
};

export default latinToCyrillicText;
