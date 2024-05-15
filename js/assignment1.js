{
    let math = "pass";
    let english = "pass";
    let kiswahili = "fail";
    let chemistry = "pass";
    let physics = "fail";
    let history = "pass";
    let geography = "fail";

    if((math == "pass") && (english == "pass") && (chemistry == "pass") && (physics == "pass") && (kiswahili == "pass") && (history="pass") && (geography="pass")) {
        console.log("You can choose a course of your choice")
    }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass")) && ((physics=="pass") || (chemistry=="pass") )){
            console.log("You can pursue computer science")
        }
        else if ((math=="pass") && (english=="pass") && (kiswahili=="pass") && ((history=="pass")|| (geography=="pass"))){
            console.log("You can pursue journalism")
        }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass")) && ((history=="pass") || (geography=="pass")) && ((chemistry=="pass") || (physics=="pass"))){
            console.log("You can pursue engineering")
        }
        else if((math=="pass") && ((english=="pass") || (kiswahili=="pass")) && (chemistry=="pass") && ((history=="pass") || (geography=="pass"))){
            console.log("You can pursue medicine")
        }
    else{
        console.log("You are not able to do any course")
    }
}