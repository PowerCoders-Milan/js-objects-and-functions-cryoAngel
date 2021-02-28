

function helloWorld(){
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
}

helloWorld();
