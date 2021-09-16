let ul = document.querySelector('.todos'); //metemos en ul el primer elemento de todos
let lis = document.querySelectorAll('.todo'); //metemos en lis todos los elementos de todo
let deletes = document.querySelectorAll('.delete'); //metemos en deletes todos los elementos de delete
let input = document.querySelector('.newTodo'); //metemos en input el elemento que escribamos

// Añadimos un escuchador a ul para que escuche nuevos elementos en lista
ul.addEventListener("click", function(e) {
  let target = e.target;
  // si objetivo es li
  if (target.classList.contains("todo-text")) {
    target.classList.contains("completed") ? target.classList.remove("completed") : target.classList.add("completed");
  // si objetivo es span
  } else if (target.classList.contains("delete")) {
      let li = target.parentElement;
      e.stopPropagation();
      li.style.opacity = '0';
      setTimeout(function(){
        li.parentNode.removeChild(li);
      }, 300);
  }
}, true);

// Añadir escuchador a la entrada
input.addEventListener("keypress", function(e) {
  // La tecla 13 es el enter, para añadir la nueva tarea
  if (e.which == "13") {
    let newTodo = this.value;
    let li = document.createElement('li'); //creamos el li
    li.classList.add("todo"); // añadimos en li el elemento de todo
    let span = document.createElement('span'); // creamos el span
    span.classList.add("todo-text"); //añadimos en span el texto de todo
    span.innerHTML = newTodo; //vemos la sintaxis HTML de newTodo
    li.appendChild(span); //añadimos el hijo
    li.innerHTML += "<i class='material-icons delete'>clear</i>"; //añadimos el boton de delete
    ul.appendChild(li);
    input.value = "";
  }
});