/* const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}; */


const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
  }
  

// Do not edit below this line
module.exports = removeFromArray;

