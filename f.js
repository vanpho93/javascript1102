// function tenFunction(thamso1, thamso2) {
//   //statment
//   return
// }

function add(a, b){
  return a + b;
}
var b = add;
// var b = add();
// console.log(b(1, 2));

function getF(bool){
  if(bool){
    return  function(){
              console.log('TRUE');
            }
  }else{
      return function(){
                console.log('FALSE');
              }
  }
}

var f = getF(true);
f();
