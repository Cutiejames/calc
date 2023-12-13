function convert() {
  const numberInput = document.getElementById('numberInput').value;
  const fromBase = document.getElementById('fromBase').value;
  const toBase = document.getElementById('toBase').value;

  let result;

  switch (fromBase) {
    case 'binary':
      if (!/^[01]+$/.test(numberInput)) {
        alert('Invalid binary input. Please enter 0s and 1s only.');
        return;
      }
      break;
    case 'decimal':
      if (!/^\d+$/.test(numberInput)) {
        alert('Invalid decimal input. Please enter digits only.');
        return;
      }
      break;
    case 'octal':
      if (!/^[0-7]+$/.test(numberInput)) {
        alert('Invalid octal input. Please enter digits 0-7 only.');
        return;
      }
      break;
    case 'hexadecimal':
      if (!/^[0-9A-Fa-f]+$/.test(numberInput)) {
        alert('Invalid hexadecimal input. Please enter digits 0-9 and letters A-F only.');
        return;
      }
      break;
  }

  switch (toBase) {
    case 'binary':
      result = parseInt(numberInput, fromBase).toString(2);
      break;
    case 'decimal':
      result = parseInt(numberInput, fromBase).toString(10);
      break;
    case 'octal':
      result = parseInt(numberInput, fromBase).toString(8);
      break;
    case 'hexadecimal':
      result = parseInt(numberInput, fromBase).toString(16).toUpperCase();
      break;
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}