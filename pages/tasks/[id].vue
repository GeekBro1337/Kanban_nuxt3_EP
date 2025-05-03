<script setup>
const route = useRoute(); 
</script>

<template>
  <h1>Page {{ route.params.id }}</h1>
</template>