import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePageStore = defineStore('pages', () => {
  const pages = ref([
    { id: 'home', name: 'Home', color: getRandomColor(), time: null },
  ]);

  function addPage() {
    const newId = `page-${Date.now()}`;
    pages.value.push({ id: newId, name: `Page ${pages.value.length + 1}`, color: getRandomColor(), time: null });
  }

  function removePage(id) {
    if (pages.value.length > 1) {
      pages.value = pages.value.filter(page => page.id !== id);
    }
  }

  function updateTime(id, time) {
    const page = pages.value.find(p => p.id === id);
    if (page) page.time = time;
  }

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return { pages, addPage, removePage, updateTime };
});