<template>
  <div class="container">
    <div class="header">
      <h1 class="title">ToDo List</h1>
      <div class="buttons-container">
        <button @click="openCreateTaskModal" class="create-button">
          Create Task
        </button>
      </div>
    </div>
    <button @click="sortByDate" class="sort-button">
      Sort by deadline
    </button>
    <TaskList :tasks="tasks" @delete-task="deleteTask" @mark-as-complete="markAsComplete" />
    <TaskSummary :summary="summary" />
    <div id="modal-container">
      <CreateTaskModal v-if="showCreateTaskModal" @close-modal="closeCreateTaskModal" @create-task="handleCreateTask" />
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import TaskSummary from './TaskSummary.vue';
import TaskList from './TaskList.vue';
import CreateTaskModal from './CreateTaskModal.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      tasks: [],
      showCreateTaskModal: false,
      summary: { completed: 0, notCompleted: 0 },
      sortByDeadline: false,
    };
  },
  mounted() {
    this.fetchTasks();
    this.fetchSummary();
  },
  methods: {
    async fetchTasks() {
      try {
        const sortByDeadline = this.sortByDeadline ? 'sort-by-deadline' : '';
        const url = `http://localhost:3000/tasks/${sortByDeadline}`;
        const response = await axios.get(url);
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async fetchSummary() {
      try {
        const response = await axios.get('http://localhost:3000/tasks/summary');
        this.summary = response.data;
      } catch (error) {
        console.error('Error fetching task summary:', error);
      }
    },
    openCreateTaskModal() {
      this.showCreateTaskModal = true;
    },
    closeCreateTaskModal() {
      this.showCreateTaskModal = false;
    },
    async handleCreateTask(newTask) {
      try {
        await axios.post('http://localhost:3000/tasks', newTask);
        this.fetchTasks();
        this.fetchSummary();
        this.closeCreateTaskModal();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        this.fetchSummary();
        this.fetchTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async markAsComplete(id) {
      try {
        await axios.put(`http://localhost:3000/tasks/${id}/complete`);
        this.fetchSummary();
        this.fetchTasks();
      } catch (error) {
        console.error('Error completing task:', error);
      }
    },
    sortByDate() {
      this.sortByDeadline = true;
      this.fetchTasks();
    },
  },
  components: {
    TaskSummary,
    TaskList,
    CreateTaskModal,
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 3rem;
  font-weight: bold;
}

.buttons-container {
  display: flex;
  align-items: center;
}

.create-button {
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.create-button:hover {
  background-color: #45a049;
}

.sort-button {
  margin-bottom: 10px;
  background-color: #ccc;
  color: black;
  padding: 6px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.sort-button:hover {
  background-color: #bbb;
}
</style>
