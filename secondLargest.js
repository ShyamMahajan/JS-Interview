const secondLargest = (arr) => {
    let max, secMax;

    for(let i in arr){
        if(max){
            if(arr[i] > max){
                secMax = max;
                max = arr[i];
            }else if(arr[i] >= secMax){
                secMax = arr[i];
            }
        }else{
            max = arr[i]
            secMax = max
        }
    }
    return secMax
}

console.log(secondLargest([2,34,3,53,2,5,3,2,46,43,42]))

