// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
//Pass Length
  pwLength = prompt("Choose a password length between 8 < 128 characters.");
  console.log("Password length " + pwLength);
//Choosing the desired characters. 
  window.alert("Pick the preferred criteria to generate your password.");

    //Characters to pick en-letters, numbers, and special. 
    const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!#$%&/=?¡*_:;,.-+¿<>";
    let generatedPassword = '';
    var draft = '';

  if(pwLength < 8 || pwLength > 128) {
    //  Will ver Must be 8 or more 
     alert("You must choose a number between 8 < 128! Please try again.")
     return undefined;
    //  Will ver real Number
   }  else if (isNaN(pwLength)) {
    alert("Please pick a Number!")
    return undefined;
   }
  
  if (pwLength >=8 && pwLength <= 128) {

    draft += confirm("Would you like to include Lowercase letters?") ? lowerLetter : '';
    draft += confirm("Would you like to include UPPERcase letters?") ? upperLetter : '';
    draft += confirm("Would you like to include Numbers?") ? numbers : '';
    draft += confirm("Would you like to include Special Characters?") ? specialCharacters : '';

    if (draft === '') {
      if (confirm("Choose at least one option")) {
        writePassword();
      } else {
        window.alert ("Bye");
      }
    }
    for (i = 0; i < pwLength; i++) {
      generatedPassword += draft[Math.floor(Math.random() * draft.length)];
  }
  }
  return generatedPassword;
}