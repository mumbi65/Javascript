{
    let grade;
    let marks = 70;
    if (marks >= 85) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if(marks >= 60) {
        grade = "C";
    }
    else if(marks >= 50) {
        grade = "D";
    }
    else{
        grade = "E";
    }
    console.log(grade);
}