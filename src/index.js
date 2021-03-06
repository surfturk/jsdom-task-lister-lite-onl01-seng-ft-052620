const form = () => document.querySelector('form');
const input = () => document.querySelector('input#new-task-description');
const taskList = () => document.querySelector('ul#tasks')

document.addEventListener("DOMContentLoaded", () => {
  // be able to submit
  form().addEventListener('submit', createTodo)

});

function createTodo(e) {
  e.preventDefault();

  const title = input().value

  const li = document.createElement('li');
  li.innerText = title;

  const button = document.createElement('button');
  button.innerText = "X"

  button.addEventListener('click', function() {
    this.parentNode.remove()
  })

  li.appendChild(button);
  taskList().appendChild(li);


  resetInput();
}

function resetInput() {
  input().value = ""
}