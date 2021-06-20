//  Assignment

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

  // Create a prompot for the password criteria using boolean values
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
}

