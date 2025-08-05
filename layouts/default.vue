<script setup lang="ts">
import Header from '~/components/organisms/Header.vue';

</script>

<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
        <Header />

        <main class="p-6">
            <slot />
        </main>

        <footer class="p-4 text-center text-sm text-gray-500">
            © 2025 – Front-end challenge by Upcity
        </footer>
    </div>
</template>