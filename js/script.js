function initVue() {

  new Vue({

    el: '#app',
    data: {

      'todoList':['Palestra', 'Fare la Spesa', 'Passegiare con cane'],
      'newTodo': ''


    },
    methods: {

      deleteTodo: function (index) {

        this.todoList.splice(index, 1);
      },

      addTodo: function () {

        if (this.newTodo.length > 0) {

          this.todoList.push(this.newTodo);
        }

        this.newTodo = '';
      }

    }

  });
  
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
