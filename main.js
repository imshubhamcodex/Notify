function tradeLookUps() {
  setTimeout(() => {
    let TTable = document.getElementsByClassName("ka-tbody")[0];
    TTable.scrollIntoView(true);
    let TNumber = Number(TTable.children[1].children[0].textContent);
    if (TNumber === tradeNumber + 1) {
      const alertAudio = new Audio();
      let count = 1;
      let loops = 2;
      alertAudio.onended = function() {
        if (count <= loops) {
          count++;
          alertAudio.play();
        }
      };
      alertAudio.src =
        "https://file-examples.com/storage/fe9278ad7f642dbd39ac5c9/2017/11/file_example_MP3_700KB.mp3";
      alertAudio.play();

      TTable.scrollIntoView(true);
      chrome.runtime.sendMessage({
        data:
          "Enter " + TTable.children[1].children[2].textContent.split(" ")[2]
      });
      tradeNumber = TNumber;
    }
    tradeLookUps();
  }, 2000);
}

let tradeTable = 0;
let tradeNumber = 0;

let tableCheckInterval = setInterval(() => {
  tradeTable = document.getElementsByClassName("ka-tbody")[0];
  if (tradeTable !== null && tradeTable !== undefined) {
    clearInterval(tableCheckInterval);
    tradeTable.scrollIntoView(true);
    tradeNumber = Number(tradeTable.children[1].children[0].textContent);
    tradeLookUps();
  }
}, 2000);
