let menu =[
    "0-pizza",
    "1-meat",
    "2-noodles",
    "3-shrimp",
];
alert(menu);
let choose=prompt("Choose your plate");

switch(choose) {
    case "0":
        alert("you choose pizza");
      break;
    case "1":
        alert("you choose meat");
      break;
      case "2":
        alert(" you choose noodles");
      break;
    case "3":
        alert("you choose shrimp");
      break;
  }

// ___________________

alert("ادخل العمليه الحسابيه");

let number1 = prompt("1ادخل الرقم")

let العمليات = prompt("ادخل العمليه")

let number2 = prompt("ادخل الرقم 2")


switch(العمليات){
    case "+":
    alert (parseInt (number1) + parseInt(number2));
    break;
    case "-":
    alert(parseIn (number1) - parseIn (number2));
    break;
    case "*":
    alert(parseIn (number1) * parseIn (number2));
    break;
    case "/":
    alert(parseIn (number1) / parseIn (number2));
    }

    // --------------------

let age =16;

let massage = prompt("how old are you ?");

if (massage > age){
    alert ("جامعه");
}

else if (massage == age) {
    alert("ثانويه");
}
else if (massage < age ) {
    alert("ابتدائي");
}