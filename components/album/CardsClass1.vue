<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>2 班</h2>
    <AlbumCard5 v-for="photo in class2Photos" :key="photo.id" :photo="photo" />
  </div>

  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>4 &amp; 5 班</h2>
    <AlbumCard5 v-for="photo in class4Photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script setup>
import photos from "@/data/albumclass1.json";
const class2Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class02");
});
const class4Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class04-05");
});
</script>

<style scoped></style>
