<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>總召 - 章樂綺專輯</h2>
    <AlbumCard5 v-for="photo in class20Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>執行長 - 鍾美華專輯</h2>
    <AlbumCard5 v-for="photo in class21Photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script setup>
import photos from "@/data/albumclass4.json";

const class20Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class20");
});
const class21Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class21");
});
</script>

<style scoped></style>
