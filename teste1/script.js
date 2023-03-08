function checkFibonacci() {
    const number = parseInt(document.getElementById("inputNumber").value);
    
    if (isFibonacci(number)) {
      alert(`${number} está na sequência de Fibonacci!`);
    } else {
      alert(`${number} não está na sequência de Fibonacci.`);
    }
  }
  
  function isFibonacci(number) {
    let a = 0;
    let b = 1;
  
    while (b < number) {
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === number;
  }