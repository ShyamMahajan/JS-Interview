const longestCommonPrefix = (arr) => {
    const [shortest, ...restOfArr] = [...arr].sort((a,b) => a.length - b.length)
    const charList = []

    shortest.split('').every((char,ind) => {
        const isValid = restOfArr.every(word => word.charAt(ind) === char)
        if(isValid){    
            charList.push(char);
        }
            return isValid
        
    })

    return charList.join('')
    
}

console.log(longestCommonPrefix(["flower", "floor", "flood","floo"]))