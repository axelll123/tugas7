<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background: #000;
  margin: 0;
  padding: 0;
  color: #00ff00;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
