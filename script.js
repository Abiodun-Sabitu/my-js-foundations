window.onload = function() {
  alert("Hi! Welcome to The Color Box Game\nToday, You will learn some new colors.\nEndeavor to read the instruction. Have fun!!!")
};


const orangeRedBox = document.getElementById("orangeRed");
orangeRedBox.addEventListener("click", ShowColorName);
function ShowColorName() {
  orangeRedBox.innerHTML = "Orange Red";
}

const tealBox = document.getElementById("teal");
tealBox.addEventListener("click", ShowTealLabel);
function ShowTealLabel() {
  tealBox.innerHTML = "Teal";
}

const oliveDrabBox = document.getElementById("oliveDrab");
oliveDrabBox.addEventListener("click", showOliveDrabLabel);
function showOliveDrabLabel() {
  oliveDrabBox.innerHTML = "Olivedrab";
}

const royalBlueBox = document.getElementById("royalBlue");
royalBlueBox.addEventListener("click", showRoyalBlueLabel);
function showRoyalBlueLabel() {
  royalBlueBox.innerHTML = "Royal Blue";
}

const burlyWoodBox = document.getElementById("burlyWood");
burlyWoodBox.addEventListener("click", showBurlyWoodLabel);
function showBurlyWoodLabel() {
  burlyWoodBox.innerHTML = "Burlywood";
}

const slateGrayBox = document.getElementById("slateGray");
slateGrayBox.addEventListener("click", showSlateGrayLabel);
function showSlateGrayLabel() {
  slateGrayBox.innerHTML = "Slate Grey";
}

const thistleBox = document.getElementById("thistle");
thistleBox.addEventListener("click", showThistleLabel);
function showThistleLabel() {
  thistleBox.innerHTML = "Thistle";
}

const fuchsiaBox = document.getElementById("fuchsia");
fuchsiaBox.addEventListener("click", showFuchsiaLabel);
function showFuchsiaLabel() {
  fuchsiaBox.innerHTML = "Fuchsia";
}

const maroonBox = document.getElementById("maroon");
maroonBox.addEventListener("click", showMaroonLabel);
function showMaroonLabel() {
  maroonBox.innerHTML = "Maroon";
}

const aquaBox = document.getElementById("aqua");
aquaBox.addEventListener("click", showAquaLabel);
function showAquaLabel() {
  aquaBox.innerHTML = "Aqua";
}

const crimsonBox = document.getElementById("crimson");
crimsonBox.addEventListener("click", showCrimsonLabel);
function showCrimsonLabel() {
  crimsonBox.innerHTML = "Crimson";
}

const chartreuseBox = document.getElementById("chartreuse");
chartreuseBox.addEventListener("click", showChartreuseLabel);
function showChartreuseLabel() {
  chartreuseBox.innerHTML = "Chartreuse";
}

const resetButton = document.getElementById("clearLabels");
resetButton.addEventListener("click", resetBoard);
function resetBoard() {
  const colorLabels = document.getElementsByClassName("box");
  for (let i = 0; i < colorLabels.length; i++) {
    colorLabels[i].innerHTML = " ";
  }
}
