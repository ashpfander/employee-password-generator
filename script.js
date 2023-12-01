// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different password criterias
// Split for the code to read each character individually within the strings
var criteria = {
  uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lowercaseLetters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "1234567890".split(""),
  specialCharacters: "~!@#$%^&*()_+?-=.".split("")
};

// Write password to the #password input
var writePassword = function() {

  // Starts with first prompt of character length selection and if/else if statements
  var characterLength = window.prompt("Between 8 and 128, how many characters would you like your password to be?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please enter a valid number.");
    writePassword();
  }

  // If confirmed, randomize the specific criteria for uppercase, lowercase, numbers, and special characters
  var upperOptions = window.confirm("Include uppercase letters?\nClick OK if yes.");
  if (upperOptions) {
    var random1 = Math.floor(Math.random() * criteria.uppercaseLetters.length);
    var randomUpper = criteria.uppercaseLetters[random1];
  }

  var lowerOptions = window.confirm("Include lowercase letters?\nClick OK if yes.");
  if (lowerOptions) {
    var random2 = Math.floor(Math.random() * criteria.lowercaseLetters.length);
    var randomLower = criteria.lowercaseLetters[random2];
  }

  var numberOptions = window.confirm("Include numbers?\nClick OK if yes.");
  if (numberOptions) {
    var random3 = Math.floor(Math.random() * criteria.numbers.length);
    var randomNumbers = criteria.numbers[random3];
  }

  var specialOptions = window.confirm("Include special characters?\nClick OK if yes.");
  if (specialOptions) {
    var random4 = Math.floor(Math.random() * criteria.specialCharacters.length);
    var randomSymbols = criteria.specialCharacters[random4];
  }
  
  // Create instance in which they don't confirm anything
  else if (!upperOptions && !lowerOptions && !numberOptions && !specialOptions) {
    window.alert("You do not meet any of the criteria. Please try again.");
    writePassword();
  }
  
  var showPassword = window.alert("Here's your password!");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);