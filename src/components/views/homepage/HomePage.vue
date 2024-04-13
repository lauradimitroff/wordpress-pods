<template>
  <div>
    <h1>Liste des agences</h1>
    <div class="agency-list" v-for="agency in agencies" :key="agency.id">
      <h2>{{ agency.title.rendered }}</h2>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const agencies = ref([]);

const fetchAgencies = async () => {
  const response = await fetch('http://wp-test-laura.dev.wp1.bwagence.fr/wp-json/wp/v2/agence');
  if (response.ok) {
    agencies.value = await response.json();
  } else {
    console.error('Failed to fetch products:', response.statusText);
  }
};

onMounted(fetchAgencies);
</script>
