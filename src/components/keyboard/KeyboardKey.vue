<template>
    <button @click="addLetter" class="flex-grow font-mono uppercase border rounded-md" :class="keyColor">
        {{ letter }}
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { currentWord, keyboardStatus } from '../../store';

const props = defineProps<{ letter: string }>()

const addLetter = () => currentWord.value.length < 7 && (currentWord.value += props.letter)

const keyColor = computed(() => {
    if (keyboardStatus.value.wrongLocation.has(props.letter)) return 'bg-orange-600';
    if (keyboardStatus.value.correctLocation.has(props.letter)) return 'bg-green-600';
    return 'bg-slate-500'
})
</script>
