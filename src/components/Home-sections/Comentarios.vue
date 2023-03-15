<template>
  <section id="Comentarios">
    <div class="w-full my-12 max-w-7xl mx-auto">
      <div class="space-y-2 ml-[10%]">
        <h1
          class="font-semibold text-5xl relative before:content-[''] before:w-2 before:h-[80%] before:bg-yellowBase before:absolute before:top-3 before:left-1 pl-6"
        >
          ¿Qué opinan nuestros clientes?
        </h1>
        <p class="pl-3 text-lg font-light">
          Nos cuentan un poco sobre los proyectos que realizamos
        </p>
      </div>

      <div class="flex justify-center">
        <div class="grid grid-cols-3 gap-7 grid-rows-1 w-fit">
          <h1 v-if="isLoading">cargando</h1>
          <h1 v-if="isError">{{ error }}</h1>
          <Comentario :data="data!"></Comentario>
        </div>
      </div>
    </div>
    <div class="flex w-full space-x-2 justify-center pt-16">
      <div
        v-for="number in [1, 2, 3, 4]"
        :key="number"
        class="h-2 w-16 flex"
        :class="{ 'bg-yellowBase': number === 2, 'bg-black': number !== 2 }"
      ></div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Comentario from "../Comentario.vue";
import { useQuery } from "@tanstack/vue-query";
import { getComments } from "@/api/getComments";

const { data, isLoading, isError, error } = useQuery(["Comments"], getComments);
</script>
