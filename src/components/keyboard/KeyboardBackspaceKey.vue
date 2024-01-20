<template>
    <OnLongPress @trigger="clear" @click="handleBackspace" as="button" class="flex-grow text-left" aria-label="backspace">
        <BackspaceIcon class="m-auto h-7" />
    </OnLongPress>
</template>

<script setup lang="ts">
import { BackspaceIcon } from '@heroicons/vue/24/outline';
import { game } from '../../store';
import { OnLongPress } from '@vueuse/components';

const clear = () => Rune.actions.updateCurrentGuess({ word: '' })

const handleBackspace = () => {
    Rune.actions.updateCurrentGuess({ word: game.value.currentGuess.slice(0, -1) })
}
</script>