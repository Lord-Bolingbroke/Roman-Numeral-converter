function convertNumber (number) {
  if (number <= 0) {
    return "There are no Roman Numeral equivalents for 0 or negative numbers"
  } else if (number <= 3) {
    return threeOrLess(number)
  } else if (number === 4) {
    return "IV"
  } else if (number >= 5 && number < 9) {
    return betweenFourAndNine(number)
  } else if (number === 9) {
    return "IX"
  } else if (number === 14) {
    return "XIV"
  } else if (number === 19) {
    return "XIX"
  } else if (number >= 10 && number < 40) {
    return greaterThanTen(number)
  }
}

function threeOrLess(number){
  var romanNum = [];
   for( var i = 0 ; i < number; i++) {
      romanNum.push("I");
  }
  return romanNum.join('');
}

function betweenFourAndNine(number){
  return "V" + threeOrLess(number % 5)
}

function greaterThanTen(number){
  return tenOrGreater(number)+ remainderOfTen(number % 10)
}

function remainderOfTen (remainder) {
  if (remainder < 5) {
    return threeOrLess(remainder);
  } else if (remainder >= 5) {
    return betweenFourAndNine(remainder);
  }
}

function tenOrGreater(number){
  var romanNum = [];
   for( var i = 1 ; i < (number/10); i++) {
      romanNum.push("X");
  }
  return romanNum.join('');
}


function findFour(number) {
  var string = number.toString()
  var slice = string.slice(-1);
  console.log(slice);
  if (slice === '4') {
    return "IV";
  }
}

function findNine(number) {
  var string = number.toString()
  var slice = string.slice(-1);
  console.log(slice);
  if (slice === '9') {
    return "IX";
  }
}
