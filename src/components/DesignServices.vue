<template>
  <div
    v-for="({ features, name }, index) in data"
    :key="index"
    class="text-black shadow-lg shadow-gray-300 rounded-lg px-5 py-5 aspect-[1.3/1] flex flex-col justify-between font-dmsans w-full cursor-pointer"
  >
    <div class="h-full flex flex-col justify-center">
      <p class="font-semibold text-xl">{{ name }}</p>
      <p class="text-sm">{{ features }}</p>
    </div>
    <p class="ml-auto w-fit text-sm font-bold">Saber más</p>
  </div>
</template>

<script setup lang="ts">
import type designService from "@/interfaces/designService";
interface Props {
  data: designService[];
}
defineProps<Props>();
</script>
