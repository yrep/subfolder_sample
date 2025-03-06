<template>
  <div class="container">
    <aside class="sidebar">
      <nav>
        <ul>
          <li v-for="page in pageStore.pages" :key="page.id">
            <router-link :to="`/testapp/?page=${page.id}`">{{ page.name }}</router-link>
            <button v-if="pageStore.pages.length > 1" @click="pageStore.removePage(page.id)">x</button>
          </li>
        </ul>
        <button @click="pageStore.addPage">Add Page</button>
      </nav>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { usePageStore } from './stores/pages';

const pageStore = usePageStore();
</script>

<style>
.container { display: flex; }
.sidebar { width: 200px; padding: 20px; }
main { flex-grow: 1; padding: 20px; }
</style>