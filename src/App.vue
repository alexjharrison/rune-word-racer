
<template>
  <div>
    <h1 class="text-red-500">test</h1>
    {{ game }}
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { onChange, game, players } from './store'
console.log(players.value)
onMounted(() => {
  Rune.initClient({ onChange })
})
</script>

<style scoped></style>
