const debounce = (callback, delay) => {
    let timeout;
    return (...args) => {
        if(timeout){
            clearTimeout(timeout)
        }else{
            timeout = setTimeout(() => {
                callback(...args)
            },delay)
        }
    }
}