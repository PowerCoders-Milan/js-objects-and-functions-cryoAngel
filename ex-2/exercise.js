// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function fortuneTeller(children, partner, geographicLocation, jobTitle){
    this.children = children;
    this.partner = partner;
    this.geographicLocation = geographicLocation;
    this.jobTitle = jobTitle;
}

var fortuneTeller = new fortuneTeller(prompt('number of children'), prompt('name of partner'), prompt('location'), prompt('job title'));
window.alert(`You will be a ${fortuneTeller.jobTitle} in ${fortuneTeller.geographicLocation} , and married to ${fortuneTeller.partner} with ${fortuneTeller.children} kids.`)

