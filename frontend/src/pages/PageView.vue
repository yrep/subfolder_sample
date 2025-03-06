<template>
  <div>
    <h1>{{ page.name }}</h1>
    <button :style="{ backgroundColor: page.color }" @click="fetchTime">Get Time</button>
    <p v-if="page.time">Last time: {{ page.time }}</p>
  </div>
</template>

<script setup>
import { usePageStore } from '../stores/pages';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageStore = usePageStore();

const pageId = computed(() => route.query.page || 'home');
const page = computed(() => pageStore.pages.find(p => p.id === pageId.value));

async function fetchTime() {
  const response = await fetch('/testapp/api/query.php');
  const data = await response.json();
  pageStore.updateTime(pageId.value, data.data.time);
}
</script>