<template>
    <div class="flex flex-grow-0 my-2 basis-full">
        <HistoryUser class="pr-2" :guesses="game.guesses[theirId]" :user-details="players[theirId]" />
        <HistoryUser class="pl-2 border-l border-gray-500" :guesses="game.guesses[yourPlayerId || '']"
            :user-details="players[yourPlayerId || '']" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HistoryUser from './HistoryUser.vue';
import { yourPlayerId, game, players } from '../../store';


const theirId = computed(() => game.value.allPlayerIds.filter(id => id !== yourPlayerId.value)[0])
</script>
