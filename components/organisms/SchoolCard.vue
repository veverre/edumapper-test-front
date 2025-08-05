<script setup lang="ts">
import Button from '~/components/atoms/Button.vue';

type School = {
    name: string;
    city: string;
    type: string;
}

defineProps<{
    school: School
}>()

</script>
<template>
    <div class="w-full flex flex-col md:flex-row justify-between gradient-bg rounded-xl text-white p-4">
        <div class="mb-4 md:mb-0">
            <h1 class="text-2xl mb-2">{{ school.name }}</h1>
            <ul class="flex gap-2">
                <li>
                    {{school.city}}
                </li>
                <li>
                    {{ school.type === 'public' ? 'Lycée Public' : 'Lycée privée' }}
                </li>
            </ul>
        </div>
        <Button class="self-start">Modifier</Button>
    </div>
</template>
<style scoped>
.gradient-bg {
    background-image: url('~/assets/images/BG.png');
    background-size: cover;
    background-position: center;
}
</style>
