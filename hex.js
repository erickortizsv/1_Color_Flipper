const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  let hexColor ="#";
  for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//Obtiene un numero aleatorio deacuerdo al tamaño del array hex
function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

//1- Primero declaramos un array donde almacenamos los numeros hexadecimales 
//2- Se obtiene por medio del Id btn el evento click del boton
//3- Se obtiene por medio de la clase .color el elemento donde se mostrara el codigo hexadecimal
//4- Creamos el evento que permite cambiar el background y mostrar el codigo hexadecimal del color
//5- En la variable hexColor definimos el #, el cual se concatenera al codigo hexa
//6- cada vez que se ejecuta el for, se ejecuta la funcion getRandomNumber 
    //la cual obtiene un numero aleatorio el cual servira para indicar la posicion de el dato 
    // que queremos obtener
//7- Dentro de el for se concatenan los datos que son obtenidos los mediante la funcion getRandomNumber
//8- Muesta el codigo del color
//9- cambia el background
