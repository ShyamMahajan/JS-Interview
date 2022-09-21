Array.prototype.newForEach = (callback) => {
    for(let i=0; i < this.length; i++){
        callback(this[i], i, this)
    }
}