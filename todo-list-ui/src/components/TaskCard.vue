<template>
  <div class="card">
    <div class="content">
      <p class="task-title">{{ task.description }}</p>
      <p class="task-deadline">
        Deadline: {{ formatDeadline(task.deadline) }}
      </p>
    </div>
    <div class="buttons-container">
      <div>
          <div v-if="task.completed" class="completed-label">
              <i class="fas fa-check"></i> Completed
          </div>
        <button v-if="!task.completed" class="pending-button" @mouseover="mouseOverPending" @mouseout="mouseOutPending" @click="markAsComplete">
          {{ pendingButtonText }}
        </button>
      </div>
      <div>
        <button class="delete-button" @click="confirmDelete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <div v-if="showConfirmation" class="confirmation-dialog">
      <p>Are you sure you want to delete this task?</p>
      <button @click="cancelDelete">Cancel</button>
      <button @click="deleteTask">Delete</button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      showConfirmation: false,
      mouseOver: false,
    };
  },
  props: {
    task: Object,
  },
  computed: {
    pendingButtonText() {
      return this.mouseOver ? 'Mark as Complete' : 'Pending';
    },
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.task.id);
      this.showConfirmation = false;
    },
    markAsComplete() {
      this.$emit('mark-as-complete', this.task.id);
    },
    confirmDelete() {
      this.showConfirmation = true;
    },
    cancelDelete() {
      this.showConfirmation = false;
    },
    formatDeadline(deadline) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
      const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', options);
      return formattedDeadline;
    },
    mouseOverPending() {
      this.mouseOver = true;
    },
    mouseOutPending() {
      this.mouseOver = false;
    },
  },
};
</script>

<style scoped>
.content {
  color: black;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  margin-bottom: 10px;
}

.task-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.task-deadline {
  font-size: 0.9rem;
  margin-top: 5px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.pending-button {
  background-color: #ccc;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.pending-button:hover {
  background-color: #8bc34a;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #d32f2f;
}

.completed-label {
  display: inline-flex;
  align-items: center;
  color: #4caf50;
}

.completed-label i {
  margin-right: 5px;
}

.confirmation-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.confirmation-dialog p {
  margin-bottom: 20px;
}

.confirmation-dialog button {
  margin: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.confirmation-dialog button:hover {
  background-color: #f0f0f0;
}
</style>
