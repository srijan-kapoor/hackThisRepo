/*# Hello World!
  1. Make a index.html
  2. Write a function when called display "Enter You Name"
  3. Store the vlaue in a variable
  4. Alert the value like this `Good Morining John`

Implement it using internal and external Javascript.

  1. Write JS inside html file.
  2. Write the JS in an external file and link your html and js.
*/
function nameAlert() {
    var name = prompt("what is your name?");
    alert(`good morning ${name}`);
  }
  nameAlert();
  
  // ## Write `VALID` and `INVALID` infront of the variable name defined below
  // ```js
  // var man;                           VALID
  // var 1girl;                         INVALID
  // var woman3;                        VALID
  // var -girl;                         INVALID
  // var blackDog;                      VALID
  // var 42;                            INVALID
  // var $42;                           VALID
  // var userName;                      VALID
  // var x, y, z;                       VALID
  // var x = 5, y = 6, z = 7;           VALID
  // var x = 5 + 10 + 2;                VALID
  // ```
  
  // var johnAge = 45;
  // var markAge = 35;
  
  // Check who is older eithe John or Mark
  // Check who is younger
  // Check if their age is equal
  
  var johnAge = 45;
  var markAge = 35;
  
  function whoIsOlder(){
    if (johnAge>markAge){
      console.log("john is older");
    }
  else if(johnAge==markAge){
    console.log("john and mark are of the same age");
  }
  else{
    console.log("mark is older");
  }
  }
  whoIsOlder();
  
  // Create a new variable and assign the age of john to new variable.
  
  var newVariable;
  newVariable =  johnAge;
  
  // Check if john is equal to or greater then mark.
  // Check if john is less then or equal to mark.
  
  if(johnAge >= markAge){
    console.log("john is older than or equal to mark");
  }
  if(markAge >= johnAge){
    console.log("mark is older than or equal to john");
  }
  
  // Calculate the average age of john and mark and assign to a new variable.
  function averageAge() {
    averageAge = (johnAge+markAge)/2;
    console.log(averageAge);
  }
  
  // Two users (John and Mark) are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg and height in meter).
  //
  // 1. Store users (John and Mark) mass and height in variables
  // 2. Calculate both their BMIs
  // 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
  // 4. Print a string to the console containing the variable from step 3. (Something like "Mark BMI is higher then John").
  
  var johnMass = 60;
  var johnHeight = 1.8;
  
  var markMass = 55;
  var markHeight = 1.6;
  
  function bmiCalculator() {
    var johnBmi = johnMass/johnHeight**2;
    var markBmi = markMass/markHeight**2;
    var johnBmiHigher = true;
    if(johnBmi>markBmi){
      johnBmiHigher = true;
    }else{
      johnBmiHigher = false;
    }
    if(johnBmiHigher){
      console.log("john's BMI is higher");
    }else{
      console.log("mark's BMI is higher");
    }
  }
  
  // ## What's the outpit of the code below
  // ```js
  // typeof "Joe";                          string
  // typeof 4;                              number
  // typeof NaN;                            number
  // typeof false;                          boolean
  // typeof [4,3,2,1];                      object
  // typeof {name:'Joe', age:45};           object
  // typeof function () {};                 function
  // typeof phone;                          undefined
  // typeof null;                           object
  
  
  
  // ## Output of the code below
  // ```js
  // // Convert num into string
  // var num = 45;
  // String(num);                           "45"
  // String(321);                           "321"
  // String(300 + 23);                      "323"
  // String(false);                         "false"
  // String(true);                          "true"
  // false.toString();                      "false"
  // true.toString();                       "true"
  // Number("3.18");                        3.18;
  // Number(" ");                           0 *doubt*
  // Number("");                            0
  // Number("22 44");                       NaN
  // Number(false);                         0
  // Number(true);                          1
  // ```
  
  // Declare two variables: admin and name.
  // Assign the value "John" to name.
  // Copy the value from name to admin.
  // Show the value of admin using alert (must output “John”).
  
  var admin;
  var name;
  name = "john";
  admin = name;
  
  alert(admin);
  
  // Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"
  function greet(){
    var name = prompt("what is your name?");
  alert(`good morning ${name}`);
  }
  
  // Modify the previous program such that only the users Alice and Bob are greeted with their names.
  
  function greetAliceOrBob() {
    var name = prompt("what is your name");
    if(name=="alice" || name=="bob"){
      alert(`good morning ${name}`);
    }else{
      alert("good morning");
    }
  }
  
  // Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"
  
  function greetSam(user){
    if(user=="Sam"){
      console.log(`hello Sam, How are you doing?`);
    }
  }
  
  // Get an input from the user using the prompt box and display the length of the string.
  // e.g “Learning is fun” should output will be 15.
  
  function strLength(){
    var string = prompt("enter a string");
    var strLength = string.length;
  
    console.log(strLength);
  }
  // Age of the owner
  //var age = 26;
  
  // Calculate the age of the dog if owner's age is 7 times of dog
  
  // Use console.log() function to log the age of the dog
  
  function dogAge(){
    var age = 26;
    var dogAge = age/7;
  
    console.log(dogAge);
  }
  
  // Marks and max marks of the student
  //var studentScore = 41;
  //var maxScore = 100;
  // Calculate the percentage of marks the student got
  
  // log the percentage in console using console.log()
  
  function percentage(){
    var studentScore = 41;
    var maxScore = 100;
  
    percentage = (studentScore/maxScore)*100;
  
    console.log(percentage);
  }
  
  //var city = "Dharamshala";
  //var country = "India";
  // Make a function which can alert the message "Dharamshala, India"
  
  function placeName(){
    var city = "Dharmashala";
    var country = "India";
  
    console.log(`${city},${country}`);
  }
  
  //
  // 1. Make a simple calculator with these functions. Using prompt, type conversion, if else statement.
  //   * Add
  //   * Sub
  //   * Mul
  //   * Div
  
  
  //calculator//
  function add(){
    var num1 = prompt("enter a number");
    var num2 = prompt("enter another number");
  
    sum = Number(num1)+Number(num2);
    console.log(sum);
  }
  
  function subtract(){
    var num1 = prompt("enter a number");
    var num2 = prompt("enter another number");
  
    difference = Number(num1)-Number(num2);
    console.log(difference);
  }
  
  function multiply(){
    var num1 = prompt("enter a number");
    var num2 = prompt("enter another number");
  
    product = Number(num1)*Number(num2);
    console.log(product);
  }
  
  function divide(){
    var num1 = prompt("enter a number");
    var num2 = prompt("enter another number");
  
    division = Number(num1)/Number(num2);
    console.log(division);
  }
  
  // ```js
  // var firstName = 'John';
  // var status = 'single';
  // // Write a if else statement where check if the status is single console.log the message `John is single` or else `John is married`
  
  function singleOrMarried() {
    var firstName = "john";
    var status = "single";
  
    if(status === "single"){
      console.log("john is single");
    }else{
      console.log("john is married");
    }
  }
  
  // 3. Write a JavaScript program that accept two integers and display the larger
  
  function whichIsGreater() {
    var num1 = prompt("enter a number");
    var num2 = prompt("enter another number");
  
    if(num1>num2){
      console.log(`${num1} is greater than ${num2}`);
    }else{
      console.log(`${num2} is greater than ${num2}`);
    }
  }
  // 4. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
  
  function signOfProduct(){
  var num1 = prompt("enter first number");
  var num2 = prompt("enter second number");
  var num3 = prompt("enter third number");
  
  var product = Number(num1)*Number(num2)*Number(num3);
  
  if(product>0){
    console.log("+");
  }else if(product<0){
    console.log("-");
  }else{
    console.log("no sign");
  }
  }
  
  // Write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
  
  function oneToHundred(){
    for(var i=1;i<=100;i++){
      if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
      }else if(i%3==0){
        console.log("Fizz");
      }else if (i%5==0) {
        console.log("Buzz");
      }else {
        console.log(i);
      }
    }
  }
  
  // Write a function called fullName that takes two input (firstName, lastName) returns the fullName
  
  function fullName() {
    var firstName = prompt("enter your first name");
    var lastName = prompt("enter your last name");
  
    var fullName = firstName+" "+lastName;
  
    console.log(fullName);
  }
  
  // Write a function that takes a number from user and alert 'Number is odd' if the number is not devisible by 2 and 'Number is even' if it is.
  
  function oddOrEven() {
    var num = prompt("enter a number");
  
    if(Number(num)%2===0){
      console.log("number is even");
    }else{
      console.log("number is odd");
    }
  }
  
  //check if a letter is a vowel or a consonant
  
  function vowelOrConsonant(){
    var letter = prompt("enter a letter");
  
    if(letter==="a" || letter==="e" || letter==="i" || letter==="o" || letter==="u"){
      alert("letter is vowel");
    }else{
      alert("letter is consonant");
    }
  }
  
  // writing numbers in reverse Order
  
  function  reverseOrder(){
    for(var i = 10; i>0;i--){
      console.log(i);
    }
  }
  
  function repeat(){
    var i = 1;
  
    while(i<3){
      console.log(++i);
    }
  }
  
  function correctAnswer(){
    let userInput = prompt("enter a number greater than 100");
    while(userInput && userInput<=100){
      userInput = prompt("enter a number greater than 100");
    }
    console.log("thank you!");
  }
  
  function primeNumber(){
    var hasDivisor = false;
    var limit = prompt("enter a number greater than 1");
    var temp;
  
    while(limit<=1){
      limit = prompt("enter a number greater than 1");
    }
    for(var i = 2; i<=limit;i++){
      if(i===2){
        console.log(i);
      }
      inner:for(var j = 2; j<i; j++){
        if(i%j === 0){
           hasDivisor = true;
           break inner;
        }else{
          temp=i;
          hasDivisor=false;
        }
      }
      if(hasDivisor===false){
        console.log(temp);
      }
    }
  }
  
  // password validator
  
  function passwordValidator() {
    var password = prompt("enter your password");
    var confirmPassword = prompt("confirm your password");
    if(password===confirmPassword){
      alert("password matched. Welcome");
    }else{
      alert("passwords don't match. Try again.")
    }
  }
  
  
  // thermometer
  
  let temp = 4;
  
  function thermometer() {
    if(temp<32){
      alert("it's freezing outside");
    }else if(temp>110){
      alert("it's hot outside");
    }else{
      alert("Go for it. It's pretty nice outside");
    }
  }
  
  //calculator
  
  function calculator(a,b) {
    var sum = a+b;
    var difference = a-b;
    var product = a*b;
    var division = a/b;
  
    console.log(`sum: ${sum}`);
    console.log(`difference: ${difference}`);
    console.log(`product: ${product}`);
    console.log(`division: ${division}`);
  }
  
  //positiveMaker
  
  function positiveMaker() {
    var input = prompt("enter a number");
    if(input<0){
      alert(-input);
    }else{
      alert(input);
    }
  }
  
  //sum of multiples
  
  function sumOfMultiples(){
    var sum = 0;
    for(var i=1;i<=1000;i++){
      if(i%3===0){
        sum += i;
      }
    }
    alert(`sum of multiples of 3 upto 1000: ${sum}`);
  }
  
  // If user enters positive number, that number won't be displayed
  
  function pessimist() {
    var input = prompt("enter a number");
    if(input<0){
      alert(input);
    }
  }
  
  // Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
  
  function relation() {
    var input1 = prompt("enter a number");
    var input2 = prompt("enter another number");
  
    if(input1>input2){
      alert(`${input1} > ${input2}`);
    }else if (input2>input1) {
      alert(`${input2} > ${input1}`);
    }else{
      alert(`${input1} = ${input2}`);
    }
  }
  
  // Funnction to Check Whether a Character is Vowel or Consonant
  
  vowelOrConsonant();
  
  // Funnction to Find the Largest Number Among Three Numbers
  
  function whoIsGreater(a,b,c) {
  
    if(a>b && a>c){
      console.log(`${a} is greater than ${b} and ${c}`);
    }else if (b>c && b>a) {
      console.log(`${b} is greater than ${a} and ${c}`);
    }else{
      console.log(`${c} is greater than ${a} and ${b}`);
    }
  }
  
  // You are given a variable, . Your task is to print:
  // - ONE, if num is equal to 1.
  // - TWO, if num is equal to 2.
  // - THREE, if num is equal to 3.
  // - FOUR, if num is equal to 4.
  // - FIVE, if num is equal to 5.
  // - SIX, if num is equal to 6.
  // - SEVEN, if num is equal to 7.
  // - EIGHT, if num is equal to 8.
  // - NINE, if num is equal to 9.
  // - PLEASE TRY AGAIN, if  is none of the above.
  
  function inWords(){
    var input = prompt("enter a number");
  
    switch (Number(input)) {
      case 1:
        console.log("One");
        break;
      case 2:
        console.log("two");
        break;
      case 3:
        console.log("three");
        break;
      case 4:
        console.log("four");
        break;
      case 5:
        console.log("five");
        break;
      case 6:
        console.log("six");
        break;
      case 7:
        console.log("seven");
        break;
      case 8:
        console.log("eight");
        break;
      case 9:
        console.log("nine");
        break;
      default:
        console.log("PLEASE TRY AGAIN");
    }
  }
  
  // You are given a variable marks. Your task is to print:
  // - AA if marks is greater than 90.
  // - AB if marks is greater than 80 and less than or equal to 90
  // - BB if marks is greater than 70 and less than or equal to 80
  // - BC if marks is greater than 60 and less than or equal to 70
  // - CC if marks is greater than 50 and less than or equal to 60
  // - CD if marks is greater than 40 and less than or equal to 50
  // - DD if marks is greater than 30 and less than or equal to 40
  // - FF if marks is less than or equal to 30
  
  function grades() {
    var marks = 85;
  
      if(marks>90){
        alert("AA");
      }else if(marks>80 && marks<=90){
        alert("AB");
      }else if(marks>70 && marks<=80){
        alert("BB");
      }else if(marks>60 && marks<=70){
        alert("BC");
      }else if(marks>50 && marks<=60){
        alert("CC");
      }else if(marks>40 && marks<=50){
        alert("CD");
      }else if(marks>30 && marks<=40){
        alert("DD");
      }else{
        alert("FF");
    }
  }
  
  // Function to generate Multiplication Table of a given number (use alert for number input)
  
  function MultiplicationTable(){
    var  input = prompt("enter the number whose table you want");
  
    for(var i=1;i<=10;i++){
      console.log(`${input} x ${i} = ${input*i}`);
    }
  }
  
  // Function to calculate the Factorial of a Number
  
  function Factorial(){
    var input = prompt("enter the number whose Factorial you want");
    var Factorial=1;
  
    for(var i=input;i>0;i--){
      Factorial*=i;
    }
    alert(Factorial);
  }
  
  
  // Take two numbers and what to do with that number from user.
  // Define an object with these function (add, sub, multiply, divide). Perform the operation
  
  function betterCalculator(){
    var number1 = prompt("enter a number");
    var number2 = prompt("enter another number");
    var operator = prompt("enter what you want to do with these numbers(+,-,*,/)");
    var num1 = Number(number1);
    var num2 = Number(number2);
  
    switch (operator) {
      case "+":
        console.log(`${num1} + ${num2} = ${num1+num2}` );
        break;
      case "-":
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;
      case "*":
        console.log(`${num1} * ${num2} = ${num1*num2}` );
        break;
      case "/":
        console.log(`${num1} / ${num2} = ${num1/num2}` );
        break;
      default:
        console.log("value entered is invalid");
    }
  }
  
  // Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
  
  function allMultipliers() {
    for(var i=1;i<=10;i++){
      for(var j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
      }
    }
  }
  
  /*
  John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
  1. Calculate the average score for each team
  2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
  3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
  4. Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
  5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
  GOOD LUCK 😀
  */
  
  function whoWins() {
  var johnScoreMatch1=89,johnScoreMatch2=120,johnScoreMatch3=103;
  var mikeScoreMatch1=116,mikeScoreMatch2=94,mikeScoreMatch3=123;
  var maryScoreMatch1=97,maryScoreMatch2=134,maryScoreMatch3=105;
  
  var johnAverageScore=(johnScoreMatch1+johnScoreMatch2+johnScoreMatch3)/3;
  var mikeAverageScore=(mikeScoreMatch1+mikeScoreMatch2+mikeScoreMatch3)/3;
  var maryAverageScore=(maryScoreMatch1+maryScoreMatch2+maryScoreMatch3)/3;
  
    if(johnAverageScore>mikeAverageScore && johnAverageScore>maryAverageScore){
      console.log(`john is the winner.Average score: ${johnAverageScore}`);
    }else if(mikeAverageScore>johnAverageScore && mikeAverageScore>maryAverageScore){
      console.log(`mike is the winner.Average score: ${mikeAverageScore}`);
    }else{
      console.log(`mary is the winner.Average score: ${maryAverageScore}`);
    }
  }
  
  // const SPENDING_THRESHOLD = 200;
  // const TAX_RATE = 0.08;
  // const PHONE_PRICE = 99.99;
  // const ACCESSORY_PRICE = 9.99;
  //
  // var bank_balance = 303.91;
  // var amount = 0;
  
  // Write a program to calculate the total price of your phone purchase.
  // You will keep purchasing phones (hint: loop!) until you run out of bank balance.
  // You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
  
  //After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
  
  //Finally, check the amount against your bank account balance to see if you can afford it or not.
  
  function buyPhones(){
    const SPENDING_THRESHOLD = 200;
    const TAX_RATE = 0.08;
    const PHONE_PRICE = 99.99;
    const ACCESSORY_PRICE = 9.99;
  
    var bank_balance = 303.91;
    var amount = 0;
    var expenditure = 0;
  
    while(bank_balance>0){
      if(bank_balance>PHONE_PRICE){
        amount += PHONE_PRICE;
        bank_balance -= amount;
        expenditure += PHONE_PRICE;
        if(bank_balance>0 && expenditure<SPENDING_THRESHOLD){
          amount += ACCESSORY_PRICE;
          bank_balance -= amount;
          expenditure += ACCESSORY_PRICE;
        }else {
          console.log("insufficient funds");
        }
      }else{
      console.log("insufficient funds");
      }
    }
  }
  
  // Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
  // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
  // By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
  
  function fibonacciSequence() {
    var a = 1;
    var b = 2;
    var temp = 0;
    var sum = 0;
  
    while(temp<4000000){
      temp = a+b;
      a = b;
      b = temp;
  
      if(a%2===0){
        sum += a;
      }
    }
    console.log(sum);
  }
  
  // Write a function named calculateDogAge that:
  // takes 1 argument: your puppy's age.
  // calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  // outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  // Add an additional argument to the function that takes the conversion rate of human to dog years.
  
  
  function calculateDogAge(puppyAge,conversionRate){
    var dogYears = puppyAge*conversionRate;
    alert(`your doggie is ${dogYears} years old in dog years`);
  }
  
  // Write a function named calculateSupply that:
  // takes 2 arguments: age, amount per day.
  // calculates the amount consumed for rest of the life (based on a constant max age).
  // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  // Accept floating point values for amount per day, and round the result to a round number.
  
  function calculateSupply(age,consumption) {
    const MAX_AGE = 100;
    var requirement = Math.ceil((MAX_AGE-age)*365*consumption);
  
    alert(`you will need ${requirement} tablets to last you until the ripe age of ${MAX_AGE}`);
  
  }
  
  // Create a function called celsiusToFahrenheit:
  // Store a celsius temperature into a variable.
  // Convert it to fahrenheit and output "NN°C is NN°F".
  
  
  function celsiusToFahrenheit(tempCelc) {
    var tempFahr = (tempCelc*(9/5))+32;
    alert(`${tempCelc}°C is ${tempFahr}°F`);
  }
  
  // Create a function called fahrenheitToCelsius:
  // Now store a fahrenheit temperature into a variable.
  // Convert it to celsius and output "NN°F is NN°C."
  
  function fahrenheitToCelsius(tempFahr){
    var tempCelc = (tempFahr-32)*(5/9);
    alert(`${tempFahr}°F is ${tempCelc}°C`);
  }
  
  // Rewrite it, to perform the same, but without if, in a single line.
  // Make two variants of checkAge:
  // Using a question mark operator ?
  // Using OR ||
  
  function checkAge(age){
    var message = (age>18)?true:confirm("do you have your parents permission?");
  return message;
  }
  
  
  
  // Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  // pow(3, 2) = 3 * 3 = 9
  // pow(3, 3) = 3 * 3 * 3 = 27
  // pow(1, 100) = 1 * 1 * ...* 1 = 1
  // Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  // In this task the function should support only natural values of n: integers up from 1.
  
  function pow() {
    var x = prompt("enter the base number");
    var n = prompt("enter the power");
    var prod = 1;
  
    for(var i=1;i<=n;i++){
      prod *= Number(x);
    }
    alert(`${x}^${n}: ${prod}`);
  }
  
  
  // Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
  
  function numOfVowels() {
    var string = prompt("enter a string");
    var aCount=0,eCount=0,iCount=0,oCount=0,uCount=0;
    var vowelCount=0;
  
    for(var i =1;i<=string.length;i++){
      if(string.charAt(i)==="a"){
        aCount++;
        vowelCount++;
      }else if(string.charAt(i)==="e"){
        eCount++;
        vowelCount++;
      }else if(string.charAt(i)==="i"){
        iCount++;
        vowelCount++;
      }else if(string.charAt(i)==="o"){
        oCount++;
        vowelCount++;
      }else if(string.charAt(i)==="u"){
        uCount++;
        vowelCount++;
      }
    }
    console.log(`number 0f a: ${aCount}, e: ${eCount}, i: ${iCount}, o: ${oCount}, u: ${uCount}`);
    console.log(`number of vowels: ${vowelCount}`);
  }
  
  // function numOfVowels() {
  //   var string = prompt("enter a string");
  //   var aCount=0,eCount=0,iCount=0,oCount=0,uCount=0;
  //   var vowelCount=0;
  //     for(var i =1;i<=string.length;i++){
  //     (string.charAt(i)==="a")?(aCount=aCount++,vowelCount++):(string.charAt(i)==="e")?(eCount++,vowelCount++):(string.charAt(i)==="i")?(iCount++,vowelCount++):(string.charAt(i)==="o")?(oCount++,vowelCount++):(string.charAt(i)==="u")?(uCount++,vowelCount++):false;
  //     }
  //     console.log(`number 0f a: ${aCount}, e: ${eCount}, i: ${iCount}, o: ${oCount}, u: ${uCount}`);
  //     console.log(`number of vowels: ${vowelCount}`);
  // }
  
  
  // Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”
  
  function palindrome(){
    var string = prompt("enter a word");
    var newString="";
  
    for(var i=string.length;i>=0;i--){
      newString+=string.charAt(i);
    }
    if(newString===string){
      alert("it's a palindrome");
    }else{
      alert(`${newString}`);
    }
  }
  
  
  // Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.
  
  function numOfWords() {
    var string = prompt("enter a string");
    var wordArray = new Array();
    wordArray = string.split(" ");
    var wordCount = wordArray.length;
  
  console.log(`this string has ${wordCount} words`);
  
  }
  
  
  // Show the following output using one loop.
  // 1, 2, 3, 4, 5
  // 6, 7, 8, 9, 10
  
  function numbers(){
    for(var i=1;i<=10;i++){
      console.log(i);
    }
  }
  
  
  // Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
  
  function sumOrProduct(){
    var num = prompt("enter a number");
    var action = prompt("sum or product from 1 upto your input. Enter + or *");
    var counter=1;
  
    if(action==="+"){
      var result = 0;
      while(counter<=num){
        result += counter;
        counter++;
      }
    }else if (action==="*") {
      var result = 1;
        while(counter<=num){
        result *= counter;
        counter++;
      }
    }
    console.log(result);
  }
  
  // Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
  
  function multiplesSum() {
    var num = prompt("enter a number");
    var result = 0;
    var counter = 1;
  
    while(counter<=Number(num)){
      if((counter%5===0&&counter%7===0)||(counter%5===0)||(counter%7===0)){
        result += counter;
        counter++;
      }
    }
    console.log(result);
    console.log(counter);
  }