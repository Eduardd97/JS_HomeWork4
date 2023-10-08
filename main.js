const sol = () => {
  const str = prompt("Введите текст");
  let bigLetters = 0;
  let smallLetters = 0;
  
  if (str === null) {
    return null; // Возвращаем null, чтобы указать, что пользователь отменил ввод
    }
    for (const char of str) {
      if (char === char.toUpperCase()) {
        bigLetters++;
      } else if (char === char.toLowerCase()) {
        smallLetters++;
      }
    }
    return {
      length: str.length,
      bigLetters: bigLetters,
      smallLetters: smallLetters,
    };
  }



const result = sol();

if (result !== null) {
  console.log(result);

  const lengthElement = document.querySelector(".length-string");
  const bigLettersElement = document.querySelector(".bigLetters-string");
  const smallLettersElement = document.querySelector(".smallLetters-string");
  const userDataList = document.querySelector(".user_data_list"); 

  lengthElement.textContent = `Длинна веденной вами строки равна: ${result.length}`;
  bigLettersElement.textContent = `Количество заглавных букв равно: ${result.bigLetters}`;
  smallLettersElement.textContent = `Количество маленьких букв равно: ${result.smallLetters}`;

  userDataList.style.display = "block";

  } else {

    const errorElement = document.querySelector(".error-message");
    errorElement.textContent = "Пользователь отменил ввод!"

    console.log("Пользователь отменил ввод!");
  }


// --------------------------------------- //


let sum = 0;

while (true) {

  
  const input = prompt("Введите номер или нажмите «Отмена», чтобы завершить:");


  if (input === null) {
    break;

  }

  const number = parseFloat(input);

  
  if (!isNaN(number)) {
    sum += number;
  } else {
    alert("Пожалуйста введите правильное число.");
  }
}
console.log(sum)

let calculationResults = document.querySelector(".calculation_results")
calculationResults.textContent = `Результат проведенных вычеслений: ${sum}`
