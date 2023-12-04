// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different password criterias
var criteria = {
  uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialCharacters: "~!@#$%^&*()_+?-=."
};

// Write password to the #password input
var writePassword = function() {

  // Houses empty string to add the multiple options upon confirmation
  // Moved to inside the function so it houses the correct options upon regeneration
  var multipleOptions = "";

  // Starts with first prompt of character length selection and if/else if statements
  var characterLength = window.prompt("Between 8 and 128, how many characters would you like your password to be?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please enter a valid number.");
    writePassword();
  }

  // If confirmed, add specific criteria to multipleOptions string
  var upperOptions = window.confirm("Include uppercase letters?\nClick OK if yes.");
  if (upperOptions == true) {
    multipleOptions += criteria.uppercaseLetters;
  }

  var lowerOptions = window.confirm("Include lowercase letters?\nClick OK if yes.");
  if (lowerOptions == true) {
    multipleOptions += criteria.lowercaseLetters;
  }

  var numberOptions = window.confirm("Include numbers?\nClick OK if yes.");
  if (numberOptions == true) {
    multipleOptions += criteria.numbers;
  }

  var specialOptions = window.confirm("Include special characters?\nClick OK if yes.");
  if (specialOptions == true) {
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
    // Create for loop to create inputted length password
    // Empty password string outside of the loop so it can generate the loop as many times as it needs before spitting out the final password
    var password = "";
    for (var i = 0; i < characterLength; i++) {
      var random = (Math.floor(Math.random() * multipleOptions.length));
      var finalPassword = multipleOptions[random];
      password += finalPassword;
    }
    return(password);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);