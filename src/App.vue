
<template>
  <div class="flex flex-col min-h-[97vh]">
    <Header />
    <h1>{{ game.guesses[yourPlayerId || ''] }}</h1>
    {{ keyboardStatus }}
    <KeyboardLayout class="mt-auto mb-5" />
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { game, keyboardStatus, onChange, yourPlayerId } from './store'
import Header from './components/Header.vue'
import KeyboardLayout from './components/keyboard/KeyboardLayout.vue';

onMounted(() => {
  Rune.initClient({ onChange })
})

</script>

<style scoped></style>
