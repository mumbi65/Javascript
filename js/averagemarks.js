{
    function averageMarks(marks) {
        let sum = 0
        for(i=0; i < marks.length; i++ ){
        sum = sum + marks[i]
    }
        return sum / marks.length;
    }

    const students = [
        {
            name: "Caroline",
            marks: [45, 78, 90, 32, 67]
        },
        {
            name: "Alvin",
            marks: [89, 78, 10, 67, 47]
        },
        {
            name: "Tiff",
            marks: [55, 88, 94, 52, 37]
        },
        {
            name: "Opisa",
            marks: [44, 68, 88, 62, 77]
        }
    ]
      function studentAverageMarks(students) {
            let studentAverage = 0
        for(let i = 0; i < students.length; i++){
            studentResults = {
                name: students[i].name,
                average: averageMarks(students[i].marks)
            }
            if(i == 0){
                studentAverage.push(studentResults)
            }
            else{
                if(studentResults.averageMarks > studentAverage[0].averageMarks){
                    let newArray = 0;
                    newArray.push(studentResults)
                    for(k = 0; k < studentAverage.length; k++){
                        newArray.push(studentAverage[k])
                    }
                    studentAverage = newArray
                } else if(studentResults.averageMarks > studentAverage[i - 1].averageMarks){
                    poppedStudent = studentAverage.pop()
                    studentAverage.push(studentResults)
                    studentAverage.push(poppedStudent)
                }else{
                    studentAverage.push(studentResults)
                }
            }
        }
        console.log(studentAverage)
      } 
      studentAverageMarks(students)
}