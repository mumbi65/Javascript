{
    const passwordField = document.getElementById("myPassword")
    const button = document.getElementById("myButton")

    let specialNumbers= "0123456789";
    let specialCharacters = "!@#$%^&*[/\\";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


    function passwordChecker(password, character){
      for(i = 0; i < character.length; i++) {
        if(password.includes(character[i])){
            return true
        }
      }
      return false;
    }

    (passwordChecker(specialNumbers, specialCharacters  ))

    button.addEventListener("click", function(){
        let password = passwordField.value;

         if( (password.length < 8) && (passwordChecker(password, specialNumbers)) && (passwordChecker(password, specialCharacters)) && (passwordChecker(password, uppercase)) ){
          alert("Password is valid")
        }
        else if(password.length < 8){
          alert("Should have atleast 8 characters long")
        }
        else if(!passwordChecker(password, specialCharacters)){
          alert("Password is missing special characters")
        }
        else if(!passwordChecker(password, uppercase)){
          alert("Password should have atleast one uppercase")
        }
        else if(!passwordChecker(password, specialNumbers)){
          alert("Password is missing special numbers")
        }
    })
}