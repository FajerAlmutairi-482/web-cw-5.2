let food = prompt("ماذا تريد ان تطلب ؟"); 
switch(food) {
    case "1":
     console.log("بيتزا");
      break;
    case "2":
  console.log("سوشي");
      break;
      case "3":
  console.log("كيك");
      break;
      case "4" :
     console.log("باستا");
      break;
    default:
   console.log( "not available");
  };

//   calcue

let number1 = parseInt(prompt("الرقم الاول "))
let number2 = parseInt(prompt (" الرقم الثاني "))
let ope =prompt(" اختر نوع العملية الحسابية") 


if ( number1 && number2){
switch(ope) {
    case "-":
     console.log (+number1 - number2 );
      break;
    case "+":
  console.log (+ number1 + number2 );
      break;
      case "*":
  console.log(+ number1 * number2 );
      break;
      default: console.log( " يوجد خطأ");
}
}