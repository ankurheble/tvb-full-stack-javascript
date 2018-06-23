/** Write a custom implementation of
 * Array.prototype.filter called Array.prototype.search
 */
Array.prototype.customFilter = function(callback) {
  if (typeof callback !== "function") {
    return;
  }
  var filteredArray = [];
  for (var i = 0; i < this.length; i++) {
    if(callback(this[i])){
        filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.customFilter(function(num){
    return num !== 3;
});

console.log(newNumbers);
