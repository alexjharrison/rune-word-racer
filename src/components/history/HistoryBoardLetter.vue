<template>
    <div class="px-1 font-mono uppercase rounded" :class="bg">
        {{ letter }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { game } from '../../store';

const props = defineProps<{
    letter: string, index: number, triggered: {
        wrongLocation: Set<string>;
        correctLocation: Set<string>;
    }
}>()

const bg = computed(() => {
    const { correctLocation, wrongLocation } = props.triggered

    if (game.value.targetWord[props.index] === props.letter) return 'bg-green-600'
    if (correctLocation.has(props.letter) || wrongLocation.has(props.letter)) return 'bg-orange-600'
    return ''
})
</script>
