<script setup>
import { useBoardStore } from '~/stores/boardStore';
const route = useRoute(); // Здесь отсутствует импорт useRoute
const boardStore = useBoardStore();

const task = computed(() => { // Здесь отсутствует импорт computed
  return boardStore.getTaskById(route.params.id);
})
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>Page {{ task }}</h1> <!-- Отображение всего объекта task -->
    </div>
  </div>
</template>