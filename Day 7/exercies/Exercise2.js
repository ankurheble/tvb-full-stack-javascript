/** Write a custom implementation of
 * Array.prototype.map called Array.prototype.transform */
Array.prototype.customMap = function(callback) {
  if (typeof callback !== "function") {
    return;
  }
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.customMap(function(num){
    return num*2;
});

console.log(newNumbers);
