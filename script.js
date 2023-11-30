// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different password criterias
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "~!@#$%^&*()_+?-=.";

// Write password to the #password input
var writePassword = function() {

  // Starts with first prompt of character length selection and if/else if statements
  var characterLength = window.prompt("Between 8 and 128, how many characters would you like your password to be?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please enter a valid number.");
    writePassword();
  }

  var upperOptions = window.confirm("Include uppercase letters?\nClick OK if yes.");
  var lowerOptions = window.confirm("Include lowercase letters?\nClick OK if yes.");
  var numberOptions = window.confirm("Include numbers?\nClick OK if yes.");
  var specialOptions = window.confirm("Include special characters?\nClick OK if yes.");
  var showPassword = window.alert("Here's your password!");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);