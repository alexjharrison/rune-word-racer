<template>
    <div class="flex items-center justify-center w-12 h-12 font-mono text-4xl uppercase border-gray-200 rounded"
        :class="letter ? 'bg-orange-600' : 'bg-gray-400'">
        <span :class="!isMyTurn ?? 'invisible'">{{ letter }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { currentWord, isMyTurn } from '../../store';

const props = defineProps<{ index: number }>()

const letter = computed(() => currentWord.value[props.index])

</script>
