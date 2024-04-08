const mainContainer = document.getElementById("target");
let changeColor = () => {
  let redCode = Math.floor(Math.random() * 256);
  let blueCode = Math.floor(Math.random() * 256);
  let greenCode = Math.floor(Math.random() * 25);
  let randomColor = "rgb"+"("+redCode+", "+blueCode+", "+greenCode+", "+greenCode+")"
  let colorChange = (mainContainer.style.backgroundColor =
    randomColor);
    mainContainer.style.transition ="all 5s ease-out" ;
  return colorChange;
};