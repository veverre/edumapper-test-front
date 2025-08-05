<script setup lang="ts">
import Header from '~/components/organisms/Header.vue';

</script>

<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
        <Header />

        <main class="p-2 max-w-3xl mx-auto">
            <slot />
        </main>
    </div>
</template>