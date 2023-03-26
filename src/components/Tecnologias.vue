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
      <div v-for="(tec, index) in tecnologias" :key="index">
        <Icon class="h-14 w-14 m-3" :icon="tec" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const tecnologias = ref([
  "vscode-icons:file-type-html",
  "vscode-icons:file-type-css",
  "logos:sass",
  "logos:javascript",
  "logos:react",
  "cib:next-js",
  "logos:vue",
  "cib:nuxt-js",
  "logos:wordpress-icon",
]);
</script>
