<template>
    <button class="flex-grow" @click="handleEnter" aria-label="enter">
        <CheckBadgeIcon class="m-auto w-7" />
    </button>
</template>

<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
import { currentWord } from "../../store"

const handleEnter = () => {
    Rune.actions.submitWord({ word: currentWord.value })
    currentWord.value = ''
}
</script>