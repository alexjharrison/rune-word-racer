<template>
    <div>
        <div id="tel-target" />
        <div class="flex gap-1 mx-1 mb-6 justify-evenly">
            <BoardLetter v-for="(_, i) in 7" :key="i" :index="i" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BoardLetter from './BoardLetter.vue';


</script>
