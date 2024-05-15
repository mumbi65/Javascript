{
    // nested if statement
    let age = 21;
    let gender = "male"
    let height = 170
    if ( age>18 ){
        if(gender == "male"){
            if (height >= 200){
                console.log("Too tall")
            }
            else if(height >= 150){
                console.log("Allowed")
            }
            else if( height <= 100){
                console.log("Don't even think about it")
            }
            else{
                console.log("Considerable")
            }
        }else{
            console.log("You are not male")
        }
    }else{
        console.log("You are not old enough");
    }
}

{
    let math = "pass";
    let english = "fail";
    let chemistry = "pass";
    let physics = "fail";
    let kiswahili = "pass";

    if((math == "pass") && (english == "pass") && (chemistry == "pass") && (physics == "pass") && (kiswahili == "pass")) {
        console.log("You can choose a course of your choice")
    }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass"))){
            console.log("You can pursue computer science")
        }
        else if ((math==pass) && (english=="pass") && (kiswahili=="pass")){
            console.log("You can pursue journalism")
        }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass")) && (physics=="pass")){
            console.log("You can pursue engineering")
        }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass")) && (chemistry=="pass")){
            console.log("You can pursue medicine")
        }
    else{
        console.log("You are not able to do any course")
    }
}