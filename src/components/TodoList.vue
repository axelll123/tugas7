<template>
    <div class="todo-list">
      <h1>Todo List</h1>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{ completed: todo.completed }" @click="toggleTodo(index)">
            {{ todo.text }}
          </span>
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
      <p>{{ incompleteCount }} tasks remaining</p>
    </div>
  </template>
  
  <script>
  import { useCountStore } from '../stores/countStore';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const countStore = useCountStore();
      const newTodo = ref('');
  
      const addTodo = () => {
        if (newTodo.value.trim()) {
          countStore.addTodo(newTodo.value.trim());
          newTodo.value = '';
        }
      };
  
      return {
        newTodo,
        todos: countStore.todos,
        addTodo,
        removeTodo: countStore.removeTodo,
        toggleTodo: countStore.toggleTodo,
        incompleteCount: countStore.incompleteCount,
      };
    },
  };
  </script>
  
  <style scoped>
  .todo-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
    background: #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: #00ff00;
  }
  input {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #00ff00;
    background: #000;
    color: #00ff00;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 0;
    border-bottom: 1px solid #00ff00;
  }
  li span {
    cursor: pointer;
  }
  li .completed {
    text-decoration: line-through;
    color: #0080ff;
  }
  button {
    background: none;
    border: none;
    color: #ff0000;
    cursor: pointer;
  }
  p {
    font-size: 1.2em;
    color: #00ff00;
  }
  </style>
  