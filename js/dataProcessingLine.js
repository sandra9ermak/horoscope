const process = () => {
  const elem = document.getElementById("processLine");
  const buttonReady = document.querySelector(
    ".dataProcessingSection__buttonReady--link"
  );
  const textRecord = document.querySelector(
    ".dataProcessingSection__textRecord"
  );
  const textDone = document.querySelector(
    ".dataProcessingSection__text--spanRecord"
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

process();
