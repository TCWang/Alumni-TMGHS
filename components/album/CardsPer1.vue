<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 g-1 space-y-1">
    <AlbumCard6 v-for="photo in photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script setup>
import photos from "@/data/albumper1.json";
</script>

<style scoped></style>
