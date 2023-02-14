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
          <Comentario
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :content="item.content"
          ></Comentario>
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
import type comentario from "../interfaces/comentario";
import Comentario from "../Comentario.vue";

const items: comentario[] = [
  {
    name: "mayki alva cotrina",
    content: "oe ya pe mano tu le metes los efectos sabor a sexo",
  },
  {
    name: "Luis alberto guerra",
    content: "oe mano quieres que haga la api otra vez xddd ",
  },
  {
    name: "sr Paul",
    content: "por que la verdad me costaria un huevo investigar otra vez y hacerlo BIEN",
  },
];
</script>
