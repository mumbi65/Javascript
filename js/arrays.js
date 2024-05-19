{
    const marks = [90, 80, 30, 70, 20, 50] 
    console.log (marks.sort().reverse())
                  
}

{
    const results = [
        {
            name: "Carol",
            marks: [90, 80, 50, 60, 70, 40, 20]
        },
        {
            name: "Mumbi",
            marks: [70, 60, 50, 80, 70, 30, 20]
        },
        {
            name: "Gachara",
            marks: [80, 60, 70, 50, 30, 20, 40]
        }
    ]
    console.log(results[1].marks[3])
    console.log(results[1].name + " : " + results[1].marks[3])
}

{
    const figures = [90, 40, 50, 60, 30, 70, 80, 60]
    for(let i = 0; i < figures.length; i++){
        console.log(figures[i])
    }
}

{
    const figures = [90, 40, 50, 60, 30, 70, 80, 60]
    for(let i = figures.length - 1; i >= 0; i-- ){
        console.log(figures[i]);
    }
}