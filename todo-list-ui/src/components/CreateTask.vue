<template>
    <div>
      <h2>Create new task</h2>
      <form @submit.prevent="createTask">
        <label for="description">Description:</label>
        <input v-model="newTask.description" type="text" id="description" required>
  
        <label for="deadline">Deadline:</label>
        <input v-model="newTask.deadline" type="datetime-local" id="deadline" required>
  
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: {
          description: '',
          deadline: '',
        },
      };
    },
    methods: {
      createTask() {
        // api call
      },
    },
  };
  </script>
  