/** Write a custom implementation of
 * Array.prototype.filter called Array.prototype.search
 */
Array.prototype.search = function(callback) {
  if (typeof callback !== "function") {
    return this;
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

let newNumbers = numbers.search(function(num){
    return num !== 3;
});

console.log(newNumbers);
