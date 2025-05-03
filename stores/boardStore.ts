import { defineStore } from 'pinia'
import boardData from '~/data/board.json'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useBoardStore = defineStore('boardStore', () => {
  const board = useStorage('board',boardData) // Используем useStorage для сохранения состояния в localStorage(Хотя я думаю что это можно было сделать через pinia)

  function addColumn(columnName: string) {
    board.value.columns.push({
      id: Date.now().toString(), // Добавляем уникальный id
      name: columnName,
      tasks: []
    })
  }

  function deleteColumn(columnIndex:number) {
    board.value.columns.splice(columnIndex, 1)
  }

  return {
    board,
    addColumn,
    deleteColumn
  }
})