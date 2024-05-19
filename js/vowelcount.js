{
    function vowelCount(string){
        let count = 0;
        for(v = 0; v <= string.length; v++){
            let name = string[v]
            if((v == "a") || (v == "e") || (v == "i") || (v == "o") || (v == "u") || ( v == "A") || ( v == "E") || (v == "I") || ( v == "O") || (v == "U"))
                count +=1; 
        }
        return count;
    }
     console.log(vowelCount("Zindua"))
}