<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>11 班</h2>
    <AlbumCard5 v-for="photo in class11Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>12 班</h2>
    <AlbumCard5 v-for="photo in class12Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>13 班</h2>
    <AlbumCard5 v-for="photo in class13Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>14 班</h2>
    <AlbumCard5 v-for="photo in class14Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>15 班</h2>
    <AlbumCard5 v-for="photo in class15Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>16 - 17 班</h2>
    <AlbumCard5 v-for="photo in class16Photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script setup>
import photos from "@/data/albumclass3.json";
const class11Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class11");
});
const class12Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class12");
});
const class13Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class13");
});
const class14Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class14");
});
const class15Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class15");
});
const class16Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class16");
});
</script>

<style scoped></style>
