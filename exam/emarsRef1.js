function alma(in) {
if (in.majom===1) {
  if (in.kecske===1) {
    return"good"
  }
}  else {
  return"bad"
}
}

//amikor az if-ek kulon vannak ki lehet oket egyenesiteni elsif soroztta
//1 step
function alma(in) {
  if (in.majom===1 && in.kecske === 1) {
    return "good";
  }
  return "bad"
}
//step 2 elnevezni
function alma(in) {
  if (isValidMajomAndKecske(in)) {
    return "good";
  }
  return "bad";
}
function isValidMajomAndKecske(in) {
  return in.majom === 1 && in.kecske===1
}
