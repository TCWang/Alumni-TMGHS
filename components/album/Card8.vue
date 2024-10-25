<template>
  <div class="pb-2">
    <img
      style="width: 400px"
      :src="`/images/IMG8/${photo.figure}`"
      alt=""
      class="img-fluid"
    />
    <p class="caption">{{ photo.name }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  photo: Object,
});
</script>

<style scoped></style>
