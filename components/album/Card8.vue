<template>
  <div class="">
    <img
      style="width: 400px"
      :src="`/images/IMG8/${photo.figure}`"
      alt=""
      class="img-fluid"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  photo: Object,
});
</script>

<style scoped></style>
