const generateBtn = document.querySelecto(".generator__btn__generate");
const copyBtn = document.querySelector(".generator__btn_copy");
const randomOassword = document.querySelector(".generator__password");
const passwordLength = document.querySelector(".length__velue");
const isUppercase = document.querySelector("#uppercase");
const isLowercase = document.querySelector("#lowercase");
const isNumber = document.querySelector("#number");
const isSymbol = document.querySelector("#symbol");
const notification = document.querySelector("generator__notification");
const checkboxes = document.querySelector('input[type="checkbox"]');

generateBtn.addEventListener("click", handleGeneratePassword);
copyBtn.addEventListener("click", copyPassword);
checkboxes.forEach((cb) => {
  cb.addEventListener("change", checkboxStatus);
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

handleGeneratePassword();
checkboxStatus();

function checkboxStatus() {
  const checkedCount = [...checkboxes].filter((cb) => cb.checked);

  if (checkedCount.length === 1) {
    checkedCount[0].disabled = true;
  } else {
    checkedCount.forEach((item) => {
      item.disabled = false;
    });
  }
}

function handleGeneratePassword() {
  const length = Number(passwordLength.innerHTML);
  const hasUpper = isUppercase.checked;
  const hasLower = isLowercase.checked;
  const hasNumber = isNumber.checked;
  const hasSymbol = isSymbol.checked;

  randomPassword.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = "";

  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  const result = generatePassword.slice(0, length);

  return result;
}

function copyPassword() {
  navigator.clipboard.writeText(randomPassword.value);

  notification.classList.add("generator__notification_show");
  window.setTimeout(() => {
    notification.classList.remove("generator__notification_show");
  }, 2000);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
