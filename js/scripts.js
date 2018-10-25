romNum = [];

function lessThanThree (number) {
  if (number < 3) {
    for (var i = 0; i < 3; i++) {
      romNum.push("I")
    }
  } return romNum.join("");
}

function lessThanEight (number) {
  if (number > 4 && number <= 8) {
    for (var i = 0; i < 3; i++) {
      romNum.push("")
    }
  } return romNum.join("");
}

var countThree = function() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  return one(i);
}

//
// function group (number) {
//   if (number < 3) {
//     return "Use I";
//   } else if (number > 3 || number < 10) {
//     return "Use V"
//   } else if (number > 10) {
//     return "use X"
//   }
//   return false;
// }
//
// number = 11 = X
// output = (number/5)
// if number was 11 = vv +I = for more than 2 v = x
