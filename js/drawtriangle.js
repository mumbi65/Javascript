{
    function drawTrianglesWithNumbers(game){
        for(let m = 1; m <= game; m++){
            let newLine = "";
            for(let k = 1; k <= m; k++){
                newLine = newLine + k;
            }
            console.log(newLine);
        }
    }
    drawTrianglesWithNumbers(10);
}