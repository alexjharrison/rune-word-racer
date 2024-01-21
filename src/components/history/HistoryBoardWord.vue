<template>
    <div class="flex justify-center">
        <HistoryBoardLetter v-for="(letter, j) in guess" :letter="letter" :index="j" :triggered="triggered" :key="j"
            :is-player="isPlayer" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { triggeredLetters } from '../../store';
import HistoryBoardLetter from './HistoryBoardLetter.vue';

const props = defineProps<{ guess: string, isPlayer: boolean }>()

const triggered = computed(() => triggeredLetters([props.guess]))

</script>
