import { defineStore } from 'pinia'
import boardData from '~/data/board.json'
import { useStorage } from '@vueuse/core'
import { ref, computed } from 'vue'
  
export const useBoardStore = defineStore('boardStore', () => {
  const board = useStorage('board', boardData)
  
  function addColumn(columnName: string) {
    board.value.columns.push({
      id: Date.now().toString(),
      name: columnName,
      tasks: []
    })
  }
  
  function deleteColumn(columnIndex: number) {
    board.value.columns.splice(columnIndex, 1)
  }
  
  // Функция для получения задачи по ID
  // В файле boardStore.js или boardStore.ts
function getTaskById(taskId) {
  for (const column of board.value.columns) {
    const task = column.tasks.find(task => task.id === taskId);
    if (task) return task;
  }
  return null;
}

  // И не забудьте вернуть эту функцию в return
  return {
    board,
    addColumn,
    deleteColumn,
    getTaskById
  }
})