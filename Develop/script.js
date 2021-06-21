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
  
  // Get user pswd input
  function passwordValues() {
    // Get length of pswd
    var length = parseInt(
      prompt('How long must your password be? Choose between 8-125 characters.')
    );
  
    // Make sure that the input is valid
    if (Number.isNaN(length) === true) {
      alert('Length of passwword must be a number');
      return;
    }
  
    // Is the password between 8 and 128 characters if not return alert
    if (length < 8 || length > 128) {
      alert('Password  requires at least 8 characters');
    }return;
    }
  
    // Use Booleon values for user input
    var hasSymbols = confirm(
      'Click OK to confirm including special characters.'
    );
    var hasNumbers = confirm(
      'Click OK to confirm including numeric characters.'
    );
      var hasLowercase = confirm(
      'Click OK to confirm including lowercase characters.'
    );
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
  
  // Get random input
  function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randElement = array[randomIndex];
  
    return randElement;
  }
  // Get password with user input
  function generatePassword() {
    var options = passwordValues();
    var result = [];
  
    var potentialChoices = [];
  
    var randomInput = [];
  
    // Add Vars to possible pswd options
    if (options.hasUppercase) {
        potentialChoices = potentialChoices.concat(upperCase);
        randomInput.push(getRandom(upperCase));
      }
      if (options.hasLowercase) {
        potentialChoices = potentialChoices.concat(lowerCase);
         randomInput.push(getRandom(lowerCase));
      }
    if (options.hasSymbols) {
      potentialChoices = potentialChoices.concat(symbols);
      randomInput.push(getRandom(symbols));
    }
    if (options.hasNumbers) {
      potentialChoices = potentialChoices.concat(numbers);
      randomInput.push(getRandom(numbers));
    }
    // iterate over loop for length and possible characters  
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(potentialChoices);
  
      result.push(possibleCharacter);
    }
  
    // Use one of each option chosen for the password
    for (var i = 0; i < randomInput.length; i++) {
      result[i] = randomInput[i];
    }
  
    // Pass result as string and write to writePassword
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