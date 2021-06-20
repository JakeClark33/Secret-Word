// Variable Arrays
// Lowercase letters in password
var lowerCase = [
  'a','b','c','d','e','f','g','h','i',
  'j','k','l','m','n','o','p','q','r',
  's','t','u','v','w','x','y','z'
];

// Uppercase letters in password
var upperCase = [
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'
];

// Numbers in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Symbols in password
var symbols = ['@','#','$','%','^','&','*',
'(',')','_','-','+','=','!',':',';','"',
'<','>','?','.','{','}','[',']'
];

// Function to prompt for password criteria
function passwordValues() {
  // Length of password variable
  var length = parseInt(
    prompt('How long must your password be? Choose between 8-125 characters.')
  );

  // Check if the value is a number or return alert
  if (Number.isNaN(length) === true) {
    alert('Length of passwword must be a number');
    return;
  }

  // Is the password at least 8 characters if not return alert
  if (length < 8) {
    alert('Password  requires at least 8 characters');
    return;
  }

  // Is the password less than 125 characters? If not return alert.
  if (length > 128) {
    alert('Password must be 128 characters or less');
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSymbols = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSymbols === false &&
    hasNumbers === false &&
    hasLowercase === false &&
    hasUppercase === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSymbols: hasSymbols,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase
  };

  return passwordOptions;
}

// Gert random element from array
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randomIndex];

  return randElement;
}

// Function: Generate password with user options
function generatePassword() {
  var options = passwordValues();
  var result = [];

  var potentialChoices = [];

  var randomInput = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSymbols) {
    potentialChoices = potentialChoices.concat(symbols);
    randomInput.push(getRandom(symbols));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumbers) {
    potentialChoices = potentialChoices.concat(numbers);
    randomInput.push(getRandom(numbers));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowercase) {
    potentialChoices = potentialChoices.concat(lowerCase);
    randomInput.push(getRandom(lowerCase));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUppercase) {
    potentialChoices = potentialChoices.concat(upperCase);
    randomInput.push(getRandom(upperCase));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(potentialChoices);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < randomInput.length; i++) {
    result[i] = randomInput[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);