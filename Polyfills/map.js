Array.prototype.newMap = (callback) => {
    const result = [];

    for(let i=0; i < this.length; i++){
        if(this.indexOf(this[i]) > -1){
            result[index] = callback(this[i], i, this)
        }
    }

    return result;
}