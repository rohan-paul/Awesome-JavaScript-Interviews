var button5 = document.getElementById("btn5");
var buttonArray = [1, 2, 3, 6, 9, 8, 7, 4];

button5.onclick = function () {
  buttonArray.unshift(buttonArray.pop());
  document.getElementById('btn1').innerHTML = buttonArray[0];
  document.getElementById('btn2').innerHTML = buttonArray[1];
  document.getElementById('btn3').innerHTML = buttonArray[2];
  document.getElementById('btn6').innerHTML = buttonArray[3];
  document.getElementById('btn9').innerHTML = buttonArray[4];
  document.getElementById('btn8').innerHTML = buttonArray[5];
  document.getElementById('btn7').innerHTML = buttonArray[6];
  document.getElementById('btn4').innerHTML = buttonArray[7];

};