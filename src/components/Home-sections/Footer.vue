<template>
  <footer class="w-full bg-yellowBase font-dmsans">
    <div
      class="max-w-7xl flex justify-between text-black py-20 px-[4%] container mx-auto"
    >
      <div class="max-w-md space-y-4">
        <h3 class="font-semibold">¿Qué hacemos por ti?</h3>
        <p>
          Ofrecemos soluciones digitales personalizadas combinando creatividad y
          tecnología para mejorar la presencia en línea y mejorar la visibilidad
          de nuestros clientes. Trabajaremos juntos para mejorar su éxito en
          línea.
        </p>
      </div>
      <div>
        <h3 class="pb-5 font-semibold">Navegador</h3>
        <ul class="space-y-1">
          <li v-for="(section, index) in sections" :key="index">
            <RouterLink :to="{ path: '/', hash: `#${section}` }">{{
              section
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold">Síguenos</h3>
      </div>
    </div>
    <div class="w-full py-3 bg-black text-white text-center font-extralight">
      Copyright ©2023 Todos los derechos reservados
      <a class="font-logo">jora<span class="text-yellowBase">coding</span></a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const sections: string[] = ["Inicio", "Nosotros", "Servicios", "Portafolio"];
</script>
