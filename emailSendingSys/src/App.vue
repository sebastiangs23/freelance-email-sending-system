<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
