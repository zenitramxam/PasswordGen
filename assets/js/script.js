// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spec = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', `~`];

console.log(lowCase);
console.log(upCase);
console.log(numer);
console.log(spec);

// Write password to the #password input
/* function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
  function writePassword() {
    var pLeng = parseInt(prompt('Choose a password length between 8 - 128 '));
    if (!pLeng) {
      alert("Password length is needed to continue");
      return;
    }
    else if (pLeng < 8 || pLeng > 128) {
      alert("Password length is invalid. Please provide a password length between 8 - 128");
      return;
    }
    else {
      var lower = confirm('Would you like Lowercase letters in your password?');
      var upper = confirm('Would you like Uppercase letters in your password?');
      var numb = confirm('Would you like numbers in your password?');
      var spChar = confirm('Would you like special characters in your password? ex. "!, @, #, $,"');
    }
    
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
