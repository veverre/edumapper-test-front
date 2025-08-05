<script setup lang="ts">
type School = {
    name: string;
    slug: string;
    city: string;
    type: string;
}

const props = defineProps<{
    modelValue?: School
    schools: School[]
}>

const emit = defineEmits<{
    (e: 'update:modelValue', value: School): void
}>()

function onChange(event: Event) {
    const selectedSlug = (event.target as HTMLSelectElement).value
    const selected = props.schools.find(s => s.slug === selectedSlug) || null
    emit('update:modelValue', selected)
}
</script>

<template>
    <select class="border rounded px-3 py-2" :value="modelValue?.slug || ''" @change="onChange">
        <option value="" disabled>Sélectionnez un lycée</option>
        <option v-for="school in schools" :key="school.slug" :value="school.slug">
            {{ school.name }}
        </option>
    </select>
</template>