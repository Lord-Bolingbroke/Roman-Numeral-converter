function convertNumber (number) {
  if (number <= 0) {
    return "There are no Roman Numeral equivalents for 0 or negative numbers"
  } else if (lessThanThree(number)) {
    return lessThanThree(number)
  } else if (divisibleByFive(number)) {
    return divisibleByFive(number)
  } else if (divisibleByTen(number)) {
    return divisibleByTen(number)
  }
}

function lessThanThree(number){
  var firstArray = [];
   for( var i = 0 ; i < number; i++) {
    if (number <= 3) {
      firstArray.push("I");
      console.log("firstarray", firstArray);
      console.log(number)
    }
  }
  return firstArray.join('');
}

function divisibleByFive(number){
  if (number === 4) {
    return "IV";
  } else if (number === 9) {
    return "IX"
  } else if (number >= 5 && number < 10) {
   return "V" + lessThanThree(number % 5)
  }
  return false;
}

function divisibleByTen(number){
  if (number >= 10) {
   return "X" + remainderOfTen(number % 10)
  }
  return false;
}

function remainderOfTen (remainder) {
  if (remainder < 5) {
    lessThanThree(remainder);
    console.log(remainder)
  } else if (remainder > 4) {
    divisibleByFive(remainder);
    console.log(remainder);
  }
}
