/**
 * Using the `getUsers` function from `assignment4.js`,
 * get 10 users from the response received from `https://randomuser.me/api`
 *
 * The `getUsers` function should return only the `name`, `email`
 * and `phone` information.
 *
 */
function getUsers(callback){
    $.get('https://randomuser.me/api?results=10',function(data){
        callback(data.results);
    });
}

getUsers(function(users){
    console.log(users);
    let userNames = users.map(function(user){
        return{
            name : user.name
        }
    });
    console.log(userNames);
});