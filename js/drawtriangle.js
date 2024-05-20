{
    function drawTrianglesWithNumbers(){
        for(let m = 1; m <= 10; m++){
            let newLine = "";
            for(let k = 1; k <= m; k++){
                newLine = newLine + k;
            }
            console.log(newLine);
        }
    }
    drawTrianglesWithNumbers();
}