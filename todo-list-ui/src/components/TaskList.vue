<template>
    <div class="task-list">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" @delete-task="deleteTask" @mark-as-complete="markAsComplete"/>
    </div>
</template>
  
<script>
import TaskCard from './TaskCard.vue';

export default {
  props: {
    tasks: Array,
  },
  components: {
    TaskCard,
  },
  methods: {
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
    markAsComplete(id) {
      this.$emit('mark-as-complete', id)
    }
  }
}
</script>

<style scoped>
.task-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
  