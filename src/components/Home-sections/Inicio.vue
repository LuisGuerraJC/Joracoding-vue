<template>
  <section id="Inicio " class="container mx-auto">
    <main class="h-screen bg-white flex justify-center">
      <!-- bg-base -->
      <div class="max-w-7xl h-full flex w-10/12 items-center">
        <aside class="font-dmsans max-w-xl space-y-7 ml-4 text-black">
          <h1 class="text-5xl font-bold leading-[1.1]">Diseño Web a Medida</h1>

          <p class="text-xl font-light max-w-lg">
            Ofrecemos servicios de diseño web profesionales con soluciones única
            a medida para mejorar la presencia de su empresa.
          </p>
          <button
            class="bg-black rounded-md px-9 py-3 text-white text-xl flex items-center"
          >
            ¡Comencemos!
          </button>

          <!-- para la navegacion -->
        </aside>
        <div class="h-full grow flex justify-center items-center">
          <div class="bg-yellowBase w-[512px] h-[512px] rounded-full"></div>
        </div>
      </div>
    </main>

    <h1 v-if="isLoading">Cargando</h1>
    <h1 v-if="isError">{{ error }}</h1>
    <div v-for="(item, index) in data" :key="index">
      {{ item }}
    </div>
  </section>
</template>

<script setup lang="ts">
import type Slide from "../../interfaces/slide";
import { useQuery } from "@tanstack/vue-query";
import { getSlides } from "@/api/getSlides";

import "swiper/css";

const { data, isLoading, isError, error } = useQuery(["Slides"], getSlides);
</script>
