// This function should execute the callback function the number of times specified.
// When the function is being executed, the repetition number (i.e. 1 for the first call)
// should be passed to the callback.

const repeatFunction = (num, callback) => {

    for (let i = 0; i < num; i++) {
      callback(i)
    }
} 

const doubleNumber = (num) => {
  console.log(num * 2)
}

repeatFunction(5, doubleNumber)