Array.prototype.newReduce = (callback, accum) => {
    let accum = accum || undefined;
    
    for(let i=0; i < this.length; i++){
        if(accum){
            accum = callback(accum,this[i], i, this)
        }else{
            accum = this[i]
        }
        
    }
    return accum;
}