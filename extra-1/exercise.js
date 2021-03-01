var actualDate = new Date();
var futurDate = new Date(2050,6,6)

var retireDate = timeCalculator(actualDate,futurDate));

var typeYourDates = prompt('enter a year')
function timeCalculator(actualDate , futurDate){
    return actualDate.getFullYear() - futurDate.getFullYear();
}
window.alert(typeYourDates);
