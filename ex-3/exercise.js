// write your JS here
// remember to always test in the browser
// to see if everything works correctly
var choices = ['mango', 'passion fruits', 'ananas'];
console.log('My choice #1 is'+" "+choices[0])
//console.log(choices[1])
//console.log(choices[2])

function choices (type , location, prices){
    this.type = type;
    this.location = location;
    this.prices = prices;
}
var mango = new choices("tropical", "africa", 10);
var passion = new choices("fruits", "sud America", 20);
var ananas = new choices("ivory coast", "africa", 50)
console.log(mango.location)
console.log(passion.prices)
console.log(ananas.type)
window.alert("mango location:"+" "+mango.location );
window.alert( "passi fruits price:"+" "+ passion.prices);
window.alert("ananas origin:" +" "+ananas.type);




