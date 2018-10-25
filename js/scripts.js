function one (number) {
  if (number === 1) {
    return "I";
  }
  return false;
}

function countTwo (number) {
  if (number < 3) {
    return number + 1 + 1;
  }
  return false;
}

var countThree = function(number) {
  for (var i = number; number < 3; number++) {
  }
  return number;
}

// var countThree = function(number) {
//   for (var i = 0; i < 3 ; number++, i++){
//     (number - 1) + i ;
//     console.log(number)
//
//   }
//   return number;
// }
