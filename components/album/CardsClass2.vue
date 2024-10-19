<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>6 班</h2>
    <AlbumCard5 v-for="photo in class6Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>7 班</h2>
    <AlbumCard5 v-for="photo in class7Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>8 班</h2>
    <AlbumCard5 v-for="photo in class8Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>9 班</h2>
    <AlbumCard5 v-for="photo in class9Photos" :key="photo.id" :photo="photo" />
  </div>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <h2>10 班</h2>
    <AlbumCard5 v-for="photo in class10Photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script setup>
import photos from "@/data/albumclass2.json";
const class6Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class06");
});
const class7Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class07");
});
const class8Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class08");
});
const class9Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class09");
});
const class10Photos = computed(() => {
  return photos.filter((photo) => photo.name === "Class10");
});
</script>

<style scoped></style>
