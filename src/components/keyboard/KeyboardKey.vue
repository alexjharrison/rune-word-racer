<template>
    <button @click="addLetter" class="flex-grow font-mono uppercase border rounded-md" :class="keyColor">
        {{ letter }}
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { game, keyboardStatus } from '../../store';

const props = defineProps<{ letter: string }>()

const addLetter = () => game.value.currentGuess.length < 7 && Rune.actions.updateCurrentGuess({ word: game.value.currentGuess + props.letter })

const keyColor = computed(() => {
    if (keyboardStatus.value.wrongLocation.has(props.letter)) return 'bg-orange-600';
    if (keyboardStatus.value.correctLocation.has(props.letter)) return 'bg-green-600';
    return 'bg-slate-500'
})
</script>
