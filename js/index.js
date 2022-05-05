import { getPhoneNumberFunc } from "./getPhoneNumber";

const callButton = document.querySelector(".callAndListen__button");

callButton.addEventListener("click", () => {
  console.log("HUSYUFRYU");
  getPhoneNumberFunc();
});
