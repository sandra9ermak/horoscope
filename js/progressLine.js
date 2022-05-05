const progress = () => {
  const elem = document.getElementById("myBar");
  const buttonReady = document.querySelector(
    ".dataProcessingSection__buttonReady__link"
  );
  const textRecord = document.querySelector(
    ".dataProcessingSection__textRecord"
  );
  const textDone = document.querySelector(
    ".dataProcessingSection__text__spanRecord"
  );

  let width = 1;
  let id = setInterval(progressStatus, 50);
  function progressStatus() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
      setInterval(() => {
        buttonReady.innerHTML = "Готово!";
        textRecord.innerHTML = "";
        textDone.innerHTML = "Выполнено!";
      }, 5000);
    }
  }
};

progress();
