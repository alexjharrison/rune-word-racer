
<template>
  <div class="flex flex-col overflow-hidden h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-100">
    <Header />
    <HistoryOverview />
    <NotAWordWarning class="mt-auto" :isVisible="isWarningVisible" />
    <BoardLayout />
    <CountdownTimer />
    <KeyboardLayout @invalidWord="toggleWarning" class="p-1" />
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onChange } from './store'
import Header from './components/Header.vue'
import KeyboardLayout from './components/keyboard/KeyboardLayout.vue';
import CountdownTimer from './components/CountdownTimer.vue';
import BoardLayout from './components/board/BoardLayout.vue';
import NotAWordWarning from './components/NotAWordWarning.vue';
import HistoryOverview from './components/history/HistoryOverview.vue';

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