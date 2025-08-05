<script setup lang="ts">
defineProps<{
    type?: 'button' | 'submit' | 'reset'
}>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

function onClick(event: MouseEvent) {
    emit('click', event)
}
</script>

<template>
    <button 
        :type="type" 
        class="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
        @click="onClick">
        <slot />
    </button>
</template>