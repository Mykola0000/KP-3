function sum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 + num2;
  }
  
  function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 - num2;
  }
  
  function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = num1 * num2;
  }
  
  function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
      document.getElementById('result').innerText = "Спроба ділення на нуль!";
    } else {
      document.getElementById('result').innerText = num1 / num2;
    }
  }
  
  function naturalLog() {
    let num1 = parseFloat(document.getElementById('num1').value);
    if (num1 <= 0) {
      document.getElementById('result').innerText = "Спроба знайти логарифм нуля або від'ємного числа!";
    } else {
      document.getElementById('result').innerText = Math.log(num1);
    }
  }
  
  function sine() {
    let num1 = parseFloat(document.getElementById('num1').value);
    document.getElementById('result').innerText = Math.sin(num1 * (Math.PI / 180));
  }
  
  function tangent() {
    let num1 = parseFloat(document.getElementById('num1').value);
    document.getElementById('result').innerText = Math.tan(num1 * (Math.PI / 180));
  }
  