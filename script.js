// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different password criterias
var criteria = {
  uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialCharacters: "~!@#$%^&*()_+?-=."
};

// Houses empty string to add the multiple options upon confirmation
var multipleOptions = "";

// Write password to the #password input
var writePassword = function() {

  // Starts with first prompt of character length selection and if/else if statements
  var characterLength = window.prompt("Between 8 and 128, how many characters would you like your password to be?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please enter a valid number.");
    writePassword();
  }

  // If confirmed, add specific criteria to multipleOptions string
  var upperOptions = window.confirm("Include uppercase letters?\nClick OK if yes.");
  if (upperOptions) {
    multipleOptions += criteria.uppercaseLetters;
  }

  var lowerOptions = window.confirm("Include lowercase letters?\nClick OK if yes.");
  if (lowerOptions) {
    multipleOptions += criteria.lowercaseLetters;
  }

  var numberOptions = window.confirm("Include numbers?\nClick OK if yes.");
  if (numberOptions) {
    multipleOptions += criteria.numbers;
  }

  var specialOptions = window.confirm("Include special characters?\nClick OK if yes.");
  if (specialOptions) {
    multipleOptions += criteria.specialCharacters;
  }
  
  // Create instance in which they don't confirm anything
  else if (!upperOptions && !lowerOptions && !numberOptions && !specialOptions) {
    window.alert("You do not meet any of the criteria. Please try again.");
    writePassword();
  }
  
  // End alert for showing password after all options
  window.alert("Here's your password!");

  var generatePassword = function() {
    // create a for loop somehow
    for (var i = 0; i < characterLength; i++) {
      var random = (Math.floor(Math.random() * multipleOptions.length));
      var finalPassword = multipleOptions[random];
      return(finalPassword);
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);