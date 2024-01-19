<template>
    <button @click="onClick" class="flex-grow border border-red-100 rounded-md">{{ letter }}</button>
</template>

<script setup lang="ts">
import { currentWord } from '../../store';

const props = defineProps<{ letter: string }>()

const onClick = () => currentWord.value += props.letter
</script>
