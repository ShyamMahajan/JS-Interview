const throttle = (callback, delay) => {
    let throttlePause;
    return (...args) => {
        if(throttlePause){
            return;
        }
        throttlePause = true;
        setTimeout(() => {
            callback(...args)
            throttlePause=false;
        }, delay)
    }
}