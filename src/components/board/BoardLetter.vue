<template>
    <span
        class="flex items-center justify-center w-12 h-12 font-mono text-4xl uppercase bg-gray-400 border-gray-200 rounded"
        v-if="!isMyTurn" :class="{ ['bg-purple-600']: letter }">{{ letter }}</span>
    <span
        class="flex items-center justify-center w-12 h-12 font-mono text-4xl uppercase transition-colors delay-200 bg-gray-400 border-gray-200 rounded"
        v-else :class="opponentColor"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { game, isMyTurn, triggeredLetters } from '../../store';

const props = defineProps<{ index: number }>()

const letter = computed(() => game.value.currentGuess[props.index])

const opponentColor = computed(() => {
    const { correctLocation, wrongLocation } = triggeredLetters([game.value.currentGuess])

    if (letter.value === game.value.targetWord[props.index]) return 'bg-green-600'
    if (correctLocation.has(letter.value) || wrongLocation.has(letter.value)) return 'bg-orange-600'
    return ''
})

</script>
