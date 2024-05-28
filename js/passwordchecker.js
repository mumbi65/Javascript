{
    const passwordField = document.getElementById("myPassword")
    const button = document.getElementById("myButton")

    let specialNumbers= "0123456789";
    let specialCharacters = "!@#$%^&*[/\\";

    function passwordChecker(password, character){
      for(i = 0; i < character.length; i++) {
        if(password.includes(character[i])){
            return true
        }
      }
      return false;
    }

    console.log(passwordChecker(specialNumbers, specialCharacters  ))

    button.addEventListener("click", function(){
        let password = passwordField.value;

        if (password.length > 8){
          alert("Password should be atleast 8 characters long")
        }
        else if( (passwordChecker(password, specialNumbers)) || (passwordChecker(password, specialCharacters))){
          alert("Password is valid")
        }
        else{
          alert("Password is missing special characters")
        }
    })
}