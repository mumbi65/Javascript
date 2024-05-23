{
    const arr = [[56, 78, 90, 34], [5, "Dan", 90], ["John", "Apple", 88]]

    function flattenArray(arr){
        let result = []
        arr.forEach((outerArray) => {
            outerArray.forEach((element) => {
                result.push(element);
            })
        });
        return result
    }
    console.log(flattenArray(arr))
}
