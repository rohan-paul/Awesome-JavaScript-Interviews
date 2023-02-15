let res = document.getElementById('res');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');

// Now set the function of each of these button below. note each of these button will do something in the result screen. So, assign those functions to res.innerHTML

btn0.onClick = () => {
  res.innerHTML += 0;
};
btn1.onclick = () => {
  res.innerHTML += 1;
};
btnClr.onclick = () => {
  res.innerHTML = '';
};
btnEql.onclick = () => {
  const innerCalculator = res.innerHTML;
  const regExpOperator = new RegExp('\\*|\\+|\\-|\\/');
  const calculatorScreenPosition = innerCalculator.search(regExpOperator);
  const operator = innerCalculator.charAt(calculatorScreenPosition);
  const screenCharArray = innerCalculator.split(operator);

  const operand1 = parseInt(screenCharArray[0], 2);
  const operand2 = parseInt(screenCharArray[1], 2);

  res.innerHTML = '';
  switch(operator) {
    case '+':
      res.innerHTML += (operand1 + operand2).toString(2);
      break;
    case '-':
      res.innerHTML += (operand1 - operand2).toString(2);
      break;
    case '*':
      res.innerHTML += (operand1 * operand2).toString(2);
      break;
    case '/':
      res.innerHTML += (operand1 / operand2).toString(2);
      break;
  }
};
btnSum.onclick = () => {
  res.innerHTML += '+';
};
btnSub.onclick = () => {
  res.innerHTML += '-';
};
btnMul.onclick = () => {
  res.innerHTML += '*';
};
btnDiv.onclick = () => {
  res.innerHTML += '/';
};