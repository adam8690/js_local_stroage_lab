var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  console.log(state)
  state.forEach(function(item){
    addItem(list,item)
  })
  //for each item in the state, invoke addItem
}

var addItem = function(list, item){
  var listItem = document.createElement('li');
  listItem.innerText = item;
  list.appendChild(listItem)
}

var handleClick = function(){
  var input = document.querySelector("input")
  var todoList = document.querySelector("#todo-list")
  addItem(todoList,input.value)
  save(input.value)
  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
}

var save = function(item){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  state.push(item)
  var todoList = window.JSON.stringify(state)
  localStorage.setItem("todoList",todoList)
  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
