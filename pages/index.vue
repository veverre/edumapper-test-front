<script setup lang="ts">
import SchoolCard from '~/components/organisms/SchoolCard.vue';
import SchoolSelect from '~/components/molecules/SchoolSelect.vue';

const { data: schools } = await useFetch('/api/schools')
const selectedSchool = ref(schools.value?.[0] || null)
const showSchoolSelect = ref(false)

</script>

<template>
  <div class="w-full p-4">
    
    <SchoolSelect 
      v-if="schools && showSchoolSelect" 
      v-model="selectedSchool" 
      :schools="schools" 
    />
    <SchoolCard 
      v-if="selectedSchool" 
      :school="selectedSchool" 
      @change-school="showSchoolSelect = true" 
    />
  </div>
</template>
