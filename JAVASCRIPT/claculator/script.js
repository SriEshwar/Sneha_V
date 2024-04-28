function calculate() {
      const expression = document.getElementById('expression').value;
      const operands = expression.split(/[+\-*/]/).map(Number);
      const operator = expression.match(/[+\-*/]/);
      let result;

      if (operands.length === 2 && operator) {
        switch (operator[0]) {
          case '+':
            result = operands[0] + operands[1];
            break;
          case '-':
            result = operands[0] - operands[1];
            break;
          case '*':
            result = operands[0] * operands[1];
            break;
          case '/':
            result = operands[0] / operands[1];
            break;
          default:
            result = 'Invalid expression';
        }
      } else {
        result = 'Invalid expression';
      }

      document.getElementById('result').textContent = 'Result: ' + result;
    }
 