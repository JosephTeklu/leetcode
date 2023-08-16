Array.prototype.last = function() {
    // if array is empty return -1 else return the last element
    if(this.length == 0)return -1;
    else return this[this.length-1]
};

// NOTES
// adding comments adds to runtime
// using terniary statment has best runtime
// return this.length ? this[this.length - 1] : -1;
// if the array has a length return the last element else return -1

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
