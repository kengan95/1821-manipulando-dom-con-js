import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

//arrow functione o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();//
  const input = document.querySelector('[data-form-input]');
  const value = input.value;//para guardar el texto que escribimos en el input
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');//creamos un LI
  task.classList.add('card');//agregamos una clase a li
  input.value = '';//limpiar el input
  
  //backticks
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);//al elemento lista quiero agregarle un hijo
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);
