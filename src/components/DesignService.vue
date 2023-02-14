<template>
  <div
    class="text-black shadow-lg shadow-gray-300 rounded-lg px-5 py-5 aspect-[1.3/1] flex flex-col justify-between font-poppins w-full cursor-pointer"
  >
    <div class="h-full flex flex-col justify-center">
      <p class="font-semibold text-xl">{{ serviceName }}</p>
      <p class="text-sm">{{ features }}</p>
    </div>
    <p class="ml-auto w-fit text-sm font-bold">Conoce más...</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: Number,
  serviceName: String,
  features: String,
});
</script>
