// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spCh = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', `~`];

var pLeng;
var lower;
var upper;
var numb;
var spCo;
var options;

console.log(lowCase);
console.log(upCase);
console.log(numer);
console.log(spCh);

generateBtn.addEventListener("click", function () {
  var pass = writePassword();
  document.getElementById('password').placeholder = pass;
 }); 

function writePassword() {
  var pLeng = parseInt(prompt('Choose a password length between 8 - 128 '));
  if (pLeng < 8 || pLeng > 128 || !pLeng) {
    alert("Password length is invalid. Please provide a password length between 8 - 128");
    return;
  } else {
    var lower = confirm('Would you like Lowercase letters in your password?');
    var upper = confirm('Would you like Uppercase letters in your password?');
    var numb = confirm('Would you like numbers in your password?');
    var spCo = confirm('Would you like special characters in your password? etc. "!, @, #, $,"');
  };
  if (!lower && !upper && !numb && !spCo) {
    options = alert("Please choose from the options given.");
  } else if (lower && upper && numb && spCo) {
    options = lowCase.concat(upCase, numer, spCh);
  } else if (lower && upper && numb && !spCo) {
    options = lowCase.concat(upCase, numer);
  } else if (lower && upper && !numb && !spCo) {
    options = lowCase.concat(upCase);
  } else if (lower && !upper && !numb && !spCo) {
    options = lowCase;
  } else if (lower && upper && !numb && spCo) {
    options = spCh.concat(upCase, lowCase);
  } else if (lower && !upper && !numb && spCo) {
    options = spCh.concat(lowCase);
  } else if (!lower && !upper && !numb && spCo) {
    options = spCh;
  } else if (lower && !upper && numb && spCo) {
    options = numer.concat(lowCase, spCh);
  } else if (!lower && !upper && numb && spCo) {
    options = numer.concat(spCh);
  } else if (!lower && !upper && numb && !spCo) {
    options = numer;
  } else if (!lower && upper && numb && spCo) {
    options = upCase.concat(numer, spCh);
  } else if (!lower && upper && numb && !spCo) {
    options = upCase.concat(numer);
  } else if (!lower && upper && !numb && !spCo) {
    options = upCase;
  } else if (!lower && upper && numb && !spCo) {
    options = upCase.concat(numer);
  } else if (lower && !upper && numb && !spCo) {
    options = lowCase.concat(numer);
  };
  var password = [];

  for (var i = 0; i < pLeng; i++) {
    var possOptions = options[Math.floor(Math.random() * options.length)];
    password.push(possOptions);
  }
 var pass = password.join('');
 UserInput(pass);
 return pass;
}
 
function UserInput(pass) {
 document.getElementById('password').textContent = pass;
}
