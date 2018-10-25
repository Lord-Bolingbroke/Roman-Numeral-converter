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
  } else if (number >= 10) {
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
  return "X" + remainderOfTen(number % 10)
}

function remainderOfTen (remainder) {
  if (remainder < 5) {
    return threeOrLess(remainder);
  } else if (remainder >= 5) {
    return betweenFourAndNine(remainder);
  }
}
