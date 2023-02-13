<template>
  <div class="text-white border-[1.5px] border-yellowBase p-2 aspect-[1.2/1] max-w-[11rem] flex flex-col justify-between">
    <p class=" font-semibold text-base">{{ serviceName }}</p>
    <div>
      <p class=" text-sm">{{ features }}</p>
      <h3 class=" text-yellowBase font-semibold text-xl">S/ {{ price }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: Number,
  serviceName: String,
  features: String,
});
</script>
