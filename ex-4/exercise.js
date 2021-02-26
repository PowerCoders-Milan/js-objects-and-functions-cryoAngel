// write your JS here
// remember to always test in the browser
// to see if everything works correctly

var age = new Date(1995,5,7);
var futurAge = new Date(2026,5,7);

//futurAge -= age;
var birthDate = myFunction(futurAge, age);
function myFunction(futurAge , age){
    return futurAge.getFullYear() - age.getFullYear()
}

console.log('In june 7 2026 you will be',birthDate);
 
