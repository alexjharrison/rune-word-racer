<template>
    <div class="flex-grow-0 flex-shrink-0 max-h-full pt-2 overflow-y-auto rounded-lg bg-opacity-40 basis-1/2"
        :class="{ ['bg-purple-500']: userDetails?.playerId === currentPlayerId }">
        <div class="flex items-center justify-center ">
            <p class="mr-1 text-sm leading-4 text-right ">{{ userDetails?.displayName }}</p>
            <img width="40" :src="userDetails?.avatarUrl" alt="avatar">
        </div>
        <HistoryBoardWord v-for="(guess, i) in guesses" :key="i" class="my-1" :guess="guess" />
    </div>
</template>

<script setup lang="ts">
import { Player } from 'rune-games-sdk';
import { currentPlayerId } from '../../store';
import HistoryBoardWord from './HistoryBoardWord.vue';

defineProps<{ guesses: readonly string[], userDetails?: Player }>()
</script>
