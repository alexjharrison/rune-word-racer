<template>
    <button @click="handleBackspace" class="flex-grow" aria-label="backspace">
        <BackspaceIcon class="m-auto h-7" />
    </button>
</template>

<script setup lang="ts">
import { BackspaceIcon } from '@heroicons/vue/24/outline';
import { currentWord } from '../../store';



const handleBackspace = () => {
    currentWord.value = currentWord.value.slice(0, -1)
}
</script>