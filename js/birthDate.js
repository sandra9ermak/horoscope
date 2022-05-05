const birthNumberSelect = document.querySelector("#birthNumberSelect");

for (let index = 1; index <= 31; index++) {
  const markupNumber = `<option value=${index}>${index}</option>`;

  birthNumberSelect.insertAdjacentHTML("beforeend", markupNumber);
}

const birthYearSelect = document.querySelector("#birthYearSelect");

for (let index = 1990; index <= 2022; index++) {
  const markupYear = `<option value=${index}>${index}</option>`;

  birthYearSelect.insertAdjacentHTML("beforeend", markupYear);
}

const birthMonthSelect = document.querySelector("#birthMonthSelect");

for (let index = 1; index <= 31; index++) {
  const markupMonth = `<option value=${index}>${index}</option>`;

  birthMonthSelect.insertAdjacentHTML("beforeend", markupMonth);
}

/*----------------------------------------------------------------*/

const qustionForm = document.querySelector(".question__form");
const questionFormButton = document.querySelector(".question__form__button");

const changeSelectt = (e) => {
  console.log(e);
  const bd = document.querySelector(e.target.id);
  // bd.addEventListener("change", () => {
  //   console.log("AAAAAAAAAAA");
  // console.log(birthDateSelect.value);
  bd.classList.add("option-change");
  questionFormButton.classList.add("btn-enabled");
  // });

  // const birthNumberSelect = document.querySelector("#birthNumberSelect");
  // const birthYearSelect = document.querySelector("#birthYearSelect");
  // const birthMonthSelect = document.querySelector("#birthMonthSelect");
  // birthNumberSelect.addEventListener("change", () => {
  //   birthNumberSelect.classList.add("option-change");
  //   // questionFormButton.classList.add("btn-enabled");
  // });
  // birthYearSelect.addEventListener("change", () => {
  //   birthYearSelect.classList.add("option-change");
  //   // questionFormButton.classList.add("btn-enabled");
  // });
  // birthMonthSelect.addEventListener("change", () => {
  //   birthMonthSelect.classList.add("option-change");
  //   // questionFormButton.classList.add("btn-enabled");
  // });
};

// for (let i = 0; i < qf.length; i++) {
// }
// birthNumberSelect.addEventListener("change", () => {
//   console.log(birthDateSelect.value);
//   birthNumberSelect.classList.add("option-change");
//   // questionFormButton.classList.add("btn-enabled");
// });
// birthYearSelect.addEventListener("change", () => {
//   console.log(birthDateSelect.value);
//   birthYearSelect.classList.add("option-change");
//   // questionFormButton.classList.add("btn-enabled");
// });
// birthMonthSelect.addEventListener("change", () => {
//   console.log(birthDateSelect.value);
//   birthMonthSelect.classList.add("option-change");
//   // questionFormButton.classList.add("btn-enabled");
// });
