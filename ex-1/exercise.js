// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function user(name1, verbe, adverb, adjectif) {
        this.name1 = name1;
        this.verbe = verbe;
        this.adverb = adverb;
        this.adjectif = adjectif;
        
    }


var user = new user(prompt('enter a name'), prompt('enter a verbe'), prompt('enter an adverb'), prompt('enter an adjectif'));
 


window.alert('was man called'+" "+ user.name1 +" "+ 'he was'+" "+ user.verbe +" "+ 'but very'+" "+ user.adverb +" "+ 'unfortunatelly' +" "+ user.adjectif);
console.log('was man called'+" "+ user.name1 +" "+ 'he was'+" "+ user.verbe +" "+ 'but very'+" "+ user.adverb +" "+ 'unfortunatelly' +" "+ user.adjectif);
