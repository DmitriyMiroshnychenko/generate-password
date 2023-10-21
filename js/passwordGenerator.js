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
