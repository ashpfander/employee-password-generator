// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different password criterias
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "~!@#$%^&*()_+?-=.";

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Added all prompts
  // Needs if instances
  var characterLength = window.prompt("Between 8 and 128, how many characters would you like your password to be?");
  var upperOptions = window.alert("Include uppercase letters?\nClick OK if yes.");
  var lowerOptions = window.alert("Include lowercase letters?\nClick OK if yes.");
  var numberOptions = window.alert("Include numbers?\nClick OK if yes.");
  var specialOptions = window.alert("Include special characters?\nClick OK if yes.");
  var showPassword = window.alert("Here's your password!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);