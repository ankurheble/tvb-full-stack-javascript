/**
 * Write a function `get` that takes a URL
 * an it's first argument and a function as
 * it's second argument. `get` should perform
 * as AJAX call to the `url` that was provided
 * and return the parsed response back to the
 * caller via the callback (or function) provided
 * as the second argument
 */
function getMeContent(url,callback){
    $.get(url,function(data){
        callback(data);
    });
}

getMeContent('https://randomuser.me/api',function(data){
    console.log(data);
});