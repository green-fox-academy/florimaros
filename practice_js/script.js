"use strict";

function ListItems($scope, todos) {
  $scope.getTodos = function () {
    return todos;
  }
}
// AngInject

angular.module("todo", [] );
  .controller("AddItem",function ($scope) {
    $scope.addTodo(newTodo) {
      $rootScope.todos.push(newTodo);
    }
  });
  .controller("ListItems", function ($scope) {
    $scope.getTodos = function () {
      return todos;
    };
  })
  .factory("todosFact", function (todos) {
    var todos=[];
    return (
      getTodos: function () {
        return todos;
      }
      addTodo: function (t) {
        todos.push(t);
      }
    );
  })
  .service("todoServ", function () {
    this.todos = [];
    this.getTodos = function () {

    }
  })
  .value("todos", []);
