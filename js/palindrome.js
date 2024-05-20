{
    function findingPalindrome(word){
        for(let begin = 0, end = word.length -1; begin < end; begin++, end--){
            if(word[begin] !== word[end]){
                return false
            }  
        }
        return true;
    }
    console.log(findingPalindrome("mom"))
    console.log(findingPalindrome("dad"))
    console.log(findingPalindrome("level"))
    console.log(findingPalindrome("palindrome"))
    console.log(findingPalindrome("Dad"))
}