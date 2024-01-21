<template>
    <div class="relative flex items-center">
        <div class="absolute right-0 h-full transition-[width] ease-linear duration-1000  rounded-l-md" :style="style"
            :class="!isMyTurn ? 'bg-purple-600' : 'bg-orange-600'" />
        <div class="z-20 left-2">
            {{ players[currentPlayerId]?.displayName || "" }}'s Turn
        </div>
        <div class="z-20 ml-auto right-2">{{ secondsRemain }}</div>
    </div>
</template>

<script setup lang="ts">
import { currentPlayerId, game, isMyTurn, players } from '../store';

import { computed } from 'vue';
const secondsRemain = computed(() => Math.round((30000 - game.value.turnTimeElapsedMs) / 1000))
const style = computed(() => `width: ${Math.max(0, Math.round(((30000 - game.value.turnTimeElapsedMs) / 30000) * 100))}%`)
</script>
