<template>
  <div class="flex flex-col">
    <div class="font-dmsans text-center space-y-3 self-start">
      <h2
        class="font-semibold text-5xl relative before:content-[''] before:w-2 before:h-[80%] before:bg-yellowBase before:absolute before:top-3 before:left-1 pl-6"
      >
        Nuestras Tecnologías
      </h2>
    </div>
    <div class="flex w-full space-x-8 overflow-x-scroll">
      <div
        class="w-36 h-36 rounded-lg bg-bg-base shrink-0"
        v-for="(item, index) in num"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const num = ref<number>(9);
</script>
