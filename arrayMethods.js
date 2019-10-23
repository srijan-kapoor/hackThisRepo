// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

var temp = 0;

function biggestNumber(arr) {
  for (number of arr) {
    if (temp < number) {
      temp = number;
    }
  }
  return temp;
}

// Find longest string in strings

function longestString(arr) {
  for (string of arr) {
    if (string.length > longest_string.length) {
      longest_string = string;
    }
  }
  console.log(longest_string);
}

// Find all the even numbers

function evenNumbers(arr) {
  for (number of arr) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

// Find all the odd numbers

function oddNumbers(arr) {
  for (number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}

// Find all the words that contain 'is' use string method 'includes'

function containsIs(arr) {
  for (string of arr) {
    if (string.includes("is")) {
      console.log(string);
    }
  }
}

// Find all the words that contain 'is' use string method 'indexOf'

function contains_Is(arr) {
  for (string of arr) {
    if (string.indexOf("is") >= 0) {
      console.log(string);
    }
  }
}

// Check if all the numbers in numbers array are divisible by three use array method (every)

function divisibleByThree(arr) {
  return arr.every(item => item % 3 === 0);
}

//  Sort Array from smallest to largest

var temp = 0;
function increasing(arr) {
  for (var j = 0; j <= arr.length; j++) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
