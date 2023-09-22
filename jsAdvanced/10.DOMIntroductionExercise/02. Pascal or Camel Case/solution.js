function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  const valueByLowerCase = document.getElementById("text").value.toLowerCase();
  const currentValue = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const arrOfStr = valueByLowerCase.split(" ");
  let output = "";
  let startingPoint = 0;

  if (currentValue === CAMEL_CASE) {
    output += arrOfStr[0];
    startingPoint = 1;

    for (let i = startingPoint; i < arrOfStr.length; i++) {
      const currentWord = arrOfStr[i];
      output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);
    }

  } else if (currentValue === PASCAL_CASE) {
    for (let i = startingPoint; i < arrOfStr.length; i++) {
      const currentWord = arrOfStr[i];
      output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);
    }
  } else {
    output = "Error!";
  }

  result.textContent = output
}