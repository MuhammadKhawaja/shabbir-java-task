// ---------Chapter 21 (Changing Case)-----------

// Q (1)....

var allLower = userInput.toLowerCase();


// Q (2)....

var x = "YourStringHere";
x = x.toLowerCase();

// Q (3)....

var x = "YourStringHere";
x = x.toUpperCase();

// Q (4)....

var originalString = "YourStringHere";
var lowercasedString = originalString.toLowerCase();

// // Q (5)....

var myArray = ["Hello", "World"]; 
var elementIndex = [0]; 
var lowercaseElement = myArray[elementIndex].toLowerCase();

// Q (6)....

var myString = "example string";
var uppercaseString = myString.toUpperCase();

alert(uppercaseString);

// Q (7)....

var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedName);

// ........Chapter 22 - 25 (Strings).......


// Q (1)....


var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);
console.log(slicedWord);


// Q (2)....

var sameWords = "sami";
var numberOfCharacters = sameWords.length;
console.log(numberOfCharacters);

// Q (3)....
 
var animal = "elephant";
var seg = animal.slice(1, 5); 
console.log(seg);
 
// Q (4)....

var myString = "Hello, world!";
var stringLength = myString.length; 
var secondVariable = stringLength; 

console.log(secondVariable);

// Q (5)....

var yourString = "YourStringHere";

var stringLength = yourString.length;

var newVariable = yourString.charAt(0) + yourString.slice(1, -3);


// Q (6)....

var text = "To be or not to be.";
var indx = text.indexOf("or");

console.log(indx);


// Q (7)....

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

console.log(indx);

// Q (8)....

var text = "The dogs go for a walk, and they really love to go.";
var indx = text.lastIndexOf("go");
if (indx !== -1) {
  indx = text.lastIndexOf("go", indx - 1);
  if (indx !== -1) {
    indx++;
  }
}

console.log(indx);

// Q (9)....

if (typeof yourString[indexNum] !=='undefined') {
   
} else {
    
}


// Q (10)....

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);
console.log(characterAtIndex2); 

// Q (11)....

var text = "This is a sample text.";
var cha = text.charAt(10);
console.log(cha);

// Q (12)....

var str = "Hello, World!";
var x = str.charAt(str.length - 1);

console.log(x);

// Q (13)....

var input = "Your input string here";
var cha = input.charAt(4); 

console.log(cha)

// Q (14)....


if (yourString.charAt(2) === 'X') {
    
  } else {
    
  }
  
// Q (15)...




var charArray = [];


var reply = "no, no, no, yes, no";


for (var i = 0; i < reply.length; i++) {
  charArray.push(reply.charAt(i));
}


var revisedReply = charArray.join(''); 

revisedReply = revisedReply.replace("no", "yes");

console.log(revisedReply);

// Q (16)....


var str = "This is 1 example with 1 occurrence of 1.";
var newStr = str.replace("1", "one");


console.log(str)



// Q (17)....



var inputString = "This is an example sentence with some characters.";
var searchChars = "abc";

var replacedString = inputString.split(searchChars).join("xyz");

console.log(replacedString);


// Chapter 26 (Rounding Numbers)



// Q (1).....

var roundedNumber = Math.round(5.7); 
console.log(roundedNumber);

// Q (2)....

var origNum = 5.3; 
var roundNum = Math.ceil(origNum);
console.log(roundNum); 

// Q (3)....



var origNum = 5.7; 
var roundNum = Math.floor(origNum);
console.log(roundNum); 


// Q (4)....

var origNum = 5.7; 
var roundNum = Math.round(origNum);
console.log(roundNum);


// Q (5)....

var origNum = 0.5;
var roundedNum = Math.floor(origNum);
console.log(roundedNum);


// Chapter 27 (Random Numbers)



// Q (1)....


var randomNum = Math.random();


var min = 1;
var max = 50;
var scaledNum = Math.floor(randomNum * (max - min + 1)) + min;

console.log(scaledNum);

// Q (2)....

var randomNum = Math.random();
console.log(randomNum); 


// Q (3)....



function rollDice() {
  
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }
  
  
  var result = rollDice();
  console.log("You rolled a " + result);
  
//  Q (4)....


function coinToss() {

    var randomNumber = Math.floor(Math.random() * 2);
    return randomNumber === 0 ? "Heads" : "Tails";
  }
  
  var result = coinToss();
  console.log("The coin landed on: " + result);


//   Chapter 28, 29 (Converting Strings)


// Q (1)....

var str = "42"; 
var integerNumber = parseInt(str);

console.log(integerNumber); 


// Q (2)....

var str = "42";
var integerNumber = parseInt(str);

console.log(integerNumber);


// Q (3)....


var str = "3.14159"; 
var floatNumber = parseFloat(str);

console.log(floatNumber);


// Q (4)....

function isIntegerString(str) {

    var regex = /^[0-9]+$/;
    return regex.test(str);
  }
  
  var str = "123"; 
  if (isIntegerString(str)) {

    var integerNumber = parseInt(str);
    console.log("Successfully converted to an integer:", integerNumber);
  } else {
    console.log("Failed to convert to an integer.");
  }
  

// Q (5)....


var number = 42; 
var stringNumber = number.toString();

console.log(stringNumber); 


// Q (6).....


function numberToString(num) {
    return num.toString();
  }
  

  var number = 42;
  var stringNumber = numberToString(number);
  console.log(stringNumber);



// Q (7)....


var decimalString = "3.14";
var integerNumber = parseInt(decimalString);

console.log(integerNumber); 



// Chapter 30 (Controlling the length of decimals)


// Q (1)....


var num = 3.14159265359; 
var newNum = num.toFixed(4).toString();
console.log(newNum); 


// Q (2)....

var num = 3.14159265359;
num = Number(num.toFixed(2)); 
console.log(num); 

// Q (3)....


if (num.toFixed(2).toString().length > 4) {

  }
  
// Q (4)....


var originalNumber = 3.14159265359; 

var roundedString = originalNumber.toFixed(2).toString();


alert("Rounded to 2 decimal places: " + roundedString);
