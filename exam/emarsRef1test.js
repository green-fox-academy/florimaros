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
bemenet objektum kimenet string
test(function (t) {
  alma(majom: 1, kecske: 1)
  t.equal(alma(majom: 1, kecske:1), "good")
})

test(function (t) {
  t.equal(alma(majom:2, kecske:4)), "bad";
  t.end();
})

jasmine
describe("alma", function () {
  it("should return good", function () {
    expect(alma(majom:1, kecske: 1))).toBe("good")
  })
})
