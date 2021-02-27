


  var text;
  var words = prompt('enter a HelloWorld',"english" );
  switch(words) {
    case "english":
      text = "Hello world";
      break;
    case "french":
      text = "salut tous le monde";
      break;
    case "russian":
      text = "privet mir";
      break;
    default:
      text = "hello world";
  }
  window.alert(text);
  console.log(text);

 /*function helloWorld(en, it, fr,){
      this.en = function (){
       console.log('hello world');
      };
      this.it = function(){
        console.log('buongiorno mondo');
      };
      this.fr = function(){
        console.log('salut le monde');
      };
 }*/
var 