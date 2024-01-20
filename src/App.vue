
<template>
  <div class="flex flex-col overflow-hidden h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-100">
    <Header />
    <pre v-for="(player, i) in game.guesses" :key="i">{{ player }}</pre>
    <NotAWordWarning class="mt-auto" :isVisible="isWarningVisible" />
    <BoardLayout />
    <CountdownTimer class="h-5" />
    <KeyboardLayout @invalidWord="toggleWarning" class="p-1" />
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onChange, game } from './store'
import Header from './components/Header.vue'
import KeyboardLayout from './components/keyboard/KeyboardLayout.vue';
import CountdownTimer from './components/CountdownTimer.vue';
import BoardLayout from './components/board/BoardLayout.vue';
import NotAWordWarning from './components/NotAWordWarning.vue';

onMounted(() => {
  Rune.initClient({ onChange })
})

const isWarningVisible = ref(false)
const toggleWarning = () => {
  isWarningVisible.value = true
  setTimeout(() => {
    isWarningVisible.value = false
  }, 3000);
}
</script>