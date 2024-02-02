<template>
  <div class="summary">
    <p class="summary-item">Completed tasks: {{ summary.completed }}</p>
    <p class="summary-item">Pending tasks: {{ summary.notCompleted }}</p>
  </div>
</template>
  
<script>
export default {
  props: {
    summary: Object,
  }
}
</script>
  
<style scoped>
.summary {
margin-top: 50px;
}

.summary-item {
font-size: 1rem;
}
</style>
  