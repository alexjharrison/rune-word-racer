<template>
    <div>
        <fieldset v-for="(row, i) in rows" :key="row" class="flex items-stretch justify-around gap-1 my-1 text-2xl"
            :disabled="isMyTurn">
            <KeyboardEnterKey v-if="i === 2" />
            <KeyboardKey v-for="letter in row" :key="letter" :letter="letter" />
            <KeyboardBackspaceKey v-if="i === 2" />
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { isMyTurn } from '../../store';
import KeyboardBackspaceKey from './KeyboardBackspaceKey.vue';
import KeyboardEnterKey from './KeyboardEnterKey.vue';
import KeyboardKey from './KeyboardKey.vue';

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

</script>
