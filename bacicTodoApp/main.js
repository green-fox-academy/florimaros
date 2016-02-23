"use strict"
var logInButton = document.getElementById("logInButton")
var userName = document.querySelector(".userName")
var password = document.querySelector(".password")
var user =  {username: "flori", password: "flori"}
logInButton.addEventListener("click", function () {
  if (userName.value===user.username && password.value===user.password) {
    alert("succesfulLogin")
  }
  else {
    alert("loginWasntSuccesful")
  }
})
//h kell megvalositani a server kliens kapcsolatot ahhoz h a login featuret valossa tegyuk

var todoInput = document.querySelector(".todoInput")
var addTodo = document.getElementById("addTodo")
var items = document.getElementById("items")
addTodo.addEventListener("click", function () {
  var li =  document.createElement("li")
  li.innerText = todoInput.value
  var deleteButton = document.createElement("button")
  deleteButton.innerText = "delete"
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove()
  })
  li.appendChild(deleteButton)
  items.appendChild(li)
})

document.addEventListener("keypress", function (event) {
  if (event.charCode===13) {
    addTodo.click()
  }
})
