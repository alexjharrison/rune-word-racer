<template>
    <button class="flex-grow" @click="handleEnter" aria-label="enter">
        <CheckBadgeIcon class="m-auto w-7" />
    </button>
</template>

<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
import { game } from "../../store";
import { allWords } from "../../words";

const emit = defineEmits(['invalidWord']);

const handleEnter = () => {
    if (game.value.currentGuess.length < 7) return

    if (!allWords.has(game.value.currentGuess)) {
        emit('invalidWord')
        return
    }
    Rune.actions.submitWord()
}
</script>