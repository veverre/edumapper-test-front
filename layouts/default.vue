<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
        <header class="p-4 bg-white shadow-md">
            <h1 class="text-xl font-bold">Header</h1>
        </header>

        <main class="p-6">
            <slot />
        </main>

        <footer class="p-4 text-center text-sm text-gray-500">
            © 2025 – Front-end challenge by Upcity
        </footer>
    </div>
</template>