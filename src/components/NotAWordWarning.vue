<template>
    <div class="mx-auto">
        <Transition enter-active-class="transition-opacity duration-500"
            leave-active-class="transition-opacity duration-500" enter-from-class="opacity-0" leave-from-class="opacity-0">
            <div v-if="isVisible"
                class="p-1 mb-2 font-semibold text-center text-gray-900 transition border rounded bg-lime-300 border-lime-300">
                Not a Word 😟
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
defineProps<{ isVisible: boolean }>()
</script>
