document.addEventListener("DOMContentLoaded", function (event) {
  //Array with texts that will be typewrited
  let dataText = [
    "a Web developer",
    "a UX/UI designer",
    "an Astronaut",
    "a Mobile App Developer",
    "...Anything!",
  ];
  //Type one phrase into the typewriter
  //Keep calling self until text is finished
  function typewriter(text, i, fnCallback) {
    //check if text is not finished
    if (i < text.length) {
      //Add next character to h1
      document.querySelector(".dynamic").innerHTML =
        text.substring(0, i + 1) +
        "<span class='dynamicSpan' aria-hidden='true'></span>";
      // wait for a while and call this function again for next character
      setTimeout(function () {
        typewriter(text, i + 1, fnCallback);
      }, 100);
    }
    //text finished,call callback if there is any callback function
    else if (typeof fnCallback == "function") {
      //call callback after function
      setTimeout(fnCallback, 700);
    }
  }

  //start typewritter animation for the dataText array
  function startTextAnimation(i) {
    if (typeof dataText[i] === "undefined") {
      setTimeout(function () {
        startTextAnimation(0);
      }, 5000);
    }
    //Check if dataText exists
    if (i < dataText[i].length) {
      //text exists! start text animation
      typewriter(dataText[i], 0, function () {
        //after callback and all texts have been animated, start the next text animation
        startTextAnimation(i + 1);
      });
    }
  }
  //start the text animation
  startTextAnimation(0);
});
