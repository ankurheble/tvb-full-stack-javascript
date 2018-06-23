/** Write a custom implementation of
 * Array.prototype.forEach called Array.prototype.each
 */
Array.prototype.each = function(callback) {
  if (typeof callback !== "function") {
    return;
  }

  for (var i = 0; i < this.length; i++) {
      callback(this[i]);
  }
};

let todos = [
    {
        title: "Pick up milk",
        id: Math.floor(Math.random()*1000),
        completed: false
    },
    {
        title: "Pick up egg",
        id: Math.floor(Math.random()*1000),
        completed: false
    },
    {
        title: "Pick up newspaper",
        id: Math.floor(Math.random()*1000),
        completed: false
    }
];

todos.each(function(todo){
    console.log(todo.title);
});
