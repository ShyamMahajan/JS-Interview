const sum = (x) => {
    return (y) => {
        if(y || y===0){
            return sum(x + y)
        }else{
            return x;
        }
    }
}

console.log(sum(2)(4)(4)(0)(4)())