<template>
  <div class="fixed w-full z-10">
    <nav class="w-full max-w-full flex justify-between px-20 pt-11 pb-5 mx-auto">
      <div class="flex grow-0 w-1/4">
        <!-- <img src="" alt="Logo"> -->
        <h2 class="text-black font-logo text-3xl">
          jora<span class="text-yellowBase">coding</span>
        </h2>
      </div>
      <ul
        class="text-grayBase flex grow text-lg justify-between cursor-pointer font-semibold"
      >
        <div class="flex w-3/5 justify-around">
          <li
            v-for="(item, index) in sections"
            :key="index"
            @click="change(index)"
            class="hover:text-yellowBase transition-colors duration-100 my-auto"
            :class="{ 'text-yellowBase': index === selected }"
          >
            <RouterLink :to="{ path: '/', hash: `#${item}` }">{{ item }}</RouterLink>
          </li>
        </div>
        <!-- <li class="flex items-center cursor-pointer">
          <div class="space-y-1 flex flex-col">
            <div class="w-8 h-1 bg-white"></div>
            <div class="w-6 h-1 self-end bg-white"></div>
            <div class="w-8 h-1 bg-white"></div>
          </div>
        </li> -->
        <li class="bg-black rounded-md px-4 py-[1px] text-white flex items-center">
          <RouterLink :to="{ path: '/', hash: `#Contacto` }">Contacto </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
const sections: string[] = ["Inicio", "Nosotros", "Servicios", "Portafolio"];

const selected = ref<number>(0);

const change = (index: number): void => {
  selected.value = index; // console.log("oe pe", selected.value)
};
</script>
