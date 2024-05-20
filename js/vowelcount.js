{
    function vowelCount(name){
        let vowels = "aeiouAEIOU"
        let count = 0;
        for(v = 0; v < name.length; v++){
            if(vowels.includes(name[v])){
                count = count + 1; 
            }
                
        }
        return count;
    }
     console.log(vowelCount("Zindua"))
}