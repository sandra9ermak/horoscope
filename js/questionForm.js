const questionFormInputAll = document.querySelectorAll('input[type="radio"]');
const questionFormButton = document.querySelector(".question__form__button");

for (let i = 0; i < questionFormInputAll.length; i++) {
  questionFormInputAll[i].addEventListener("click", () => {
    console.log("FOIIURFYHIEYFI");
    questionFormButton.classList.add("btn-enabled");
  });
}
