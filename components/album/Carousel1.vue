<template>
  <div class="relative w-full overflow-hidden">
    <!-- Carousel Wrapper -->
    <div
      class="flex transition-transform ease-out duration-500"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <!-- Carousel Items -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full h-auto"
      >
        <img
          :src="image"
          alt="Carousel Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Controls (Next/Previous) -->
    <button
      @click="prev"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full"
    >
      &lt;
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full"
    >
      &gt;
    </button>

    <!-- Indicators -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{
          'bg-blue-900': index === activeIndex,
          'bg-gray-400': index !== activeIndex,
        }"
        class="block w-2 h-2 rounded-full"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "/images/IMG9/S_011.jpg",
  "/images/IMG9/S_012.jpg",
  "/images/IMG9/S_021.jpg",
  "/images/IMG9/S_022.jpg",
  "/images/IMG9/S_031.jpg",
  "/images/IMG9/S_032.jpg",
  "/images/IMG9/S_041.jpg",
  "/images/IMG9/S_042.jpg",
  "/images/IMG9/S_051.jpg",
  "/images/IMG9/S_052.jpg",
  "/images/IMG9/S_061.jpg",
  "/images/IMG9/S_062.jpg",
  "/images/IMG9/S_071.jpg",
  "/images/IMG9/S_072.jpg",
  "/images/IMG9/S_081.jpg",
  "/images/IMG9/S_082.jpg",
  "/images/IMG9/S_091.jpg",
  "/images/IMG9/S_092.jpg",
  "/images/IMG9/S_101.jpg",
  "/images/IMG9/S_102.jpg",
]);

const activeIndex = ref(0);

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
};

const prev = () => {
  activeIndex.value =
    activeIndex.value === 0 ? images.value.length - 1 : activeIndex.value - 1;
};
</script>

<style scoped>
/* Add some custom styles if needed */
</style>
