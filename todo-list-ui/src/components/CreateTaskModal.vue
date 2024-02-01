<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Create a New Task</h2>
        <div class="input-container">
          <label for="description">Task Description:</label>
          <input v-model="newTask.description" type="text" id="description" />
          <span v-show="!newTask.description && showError" class="error-message">
            This field is required
          </span>
        </div>
        <div class="input-container">
          <label for="deadline">Deadline:</label>
          <input v-model="newTask.deadline" type="datetime-local" id="deadline" />
          <span v-show="!newTask.deadline && showError" class="error-message">This field is required</span>
        </div>
        <div class="button-container">
          <button @click="createTask" class="create-button">Create</button>
          <button @click="closeModal" class="cancel-button">Cancel</button>
        </div>
      </div>
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
        showError: false, // Flag to control error message visibility
      };
    },
    computed: {
      isCreateButtonDisabled() {
        return !this.newTask.description || !this.newTask.deadline;
      },
    },
    methods: {
      createTask() {
        if (!this.isCreateButtonDisabled) {
          this.showError = false; // Reset error flag
          this.$emit('create-task', this.newTask);
        } else {
          this.showError = true; // Show error message
        }
      },
      closeModal() {
        this.showError = false; // Reset error flag on modal close
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 100%;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .input-container {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .create-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .create-button:hover {
    background-color: #45a049;
  }
  
  .cancel-button {
    background-color: #f44336;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .cancel-button:hover {
    background-color: #d32f2f;
  }
  
  .error-message {
    color: #f44336;
    font-size: 0.8rem;
    margin-top: 5px;
    display: block;
  }
  </style>
  