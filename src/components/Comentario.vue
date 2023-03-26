<template>
  <div
    v-for="({ name, content, enterprise }, index) in data"
    :key="index"
    class="text-black shadow-lg shadow-gray-300 rounded-lg px-5 py-5 aspect-[1.2/1] flex flex-col justify-between font-dmsans w-full cursor-pointer max-w-sm max-h-[228px]"
  >
    <div class="h-full flex flex-col justify-center">
      <p class="font-semibold text-xl">{{ name }}</p>
      <p class="text-sm">{{ content }}</p>
      <p class="font-semibold text-xl">{{ enterprise }}</p>
    </div>
    <p class="ml-auto w-fit text-sm font-bold">Conoce más...</p>
  </div>
</template>

<script setup lang="ts">
import type comment from "@/interfaces/comment";
interface Props {
  data: comment[];
}
defineProps<Props>();
</script>
