<script setup lang="ts">
import SchoolCard from '~/components/organisms/SchoolCard.vue';

const school = ref({
    name: 'Lycée Jean Jaurès',
    city: 'Paris',
    type: 'public'
});
</script>

<template>
  <div class="w-full p-4">
    <SchoolCard :school="school"/>
  </div>
</template>

