// src/stores/countStore.js
import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ text, completed: false });
      console.log('Added todo:', this.todos); // Debugging log
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
  getters: {
    incompleteCount: (state) => {
      const count = state.todos.filter(todo => !todo.completed).length;
      console.log('Incomplete tasks:', count); // Debugging log
      return count;
    },
  },
});
