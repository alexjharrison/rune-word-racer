
<template>
  <div class="flex flex-col h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-100">
    <Header />
    <pre v-for="(player, i) in game.guesses" :key="i">{{ player }}</pre>
    <BoardLayout class="mt-auto" />
    <CountdownTimer class="h-5" />
    <KeyboardLayout class="p-1" />
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { onChange, game } from './store'
import Header from './components/Header.vue'
import KeyboardLayout from './components/keyboard/KeyboardLayout.vue';
import CountdownTimer from './components/CountdownTimer.vue';
import BoardLayout from './components/board/BoardLayout.vue';

onMounted(() => {
  Rune.initClient({ onChange })
})

</script>

<style scoped></style>
