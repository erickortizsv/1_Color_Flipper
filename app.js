const colors = ["green","red","rgba(133,122,200)","f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  //Obtener un numero random entre 0 y 3
  const randomNumber = getRandomNumber();
  
  //cambiamos el color del fondo 
  document.body.style.backgroundColor = colors[randomNumber];
  //Mostramos el codigo del color en pantalla
  color.textContent =colors[randomNumber];
});

//Funcion para obtener un numero random
function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}

