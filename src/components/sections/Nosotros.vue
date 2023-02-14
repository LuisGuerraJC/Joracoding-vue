<template>
  <section id="Nosotros" class="bg-black flex w-full">
    <div class="font-poppins flex w-full justify-center">
      <div class="max-w-7xl w-full flex">
        <div class="flex justify-center items-center w-[60%]">
          <div class="bg-yellowBase w-[412px] h-[412px] rounded-full"></div>
        </div>

        <div class="space-y-5 mt-11 text-white px-10">
          <h2
            class="text-4xl pl-6 font-semibold relative before:content-[''] before:bg-yellowBase before:absolute before:top-3 before:left-0 before:h-14 before:w-2"
          >
            ¿Quiénes <br />
            <span class="text-yellowBase"> somos?</span>
          </h2>
          <p class="pl-7 text-xl max-w-xl font-light">
            Somos una agencia de diseño gráfico y desarrollo web con experiencia en el
            mercado. Ofrecemos soluciones digitales personalizadas a nuestros clientes.
            Combinamos creatividad y tecnología para mejorar la presencia en línea y
            aumentar la visibilidad. Trabajaremos juntos para dar vida a su marca y
            alcanzar el éxito en línea.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { useQuery } from "@tanstack/vue-query";
// import SpinnerVue from "../Spinner.vue";
// import type clientData from "../interfaces/clientData";

// interface Props {
//   topPadding: number;
// }
// defineProps<Props>();

// const getClientsData = async (): Promise<clientData[]> => {
//   const data = await fetch("/src/json/clientes.json");
//   const json = await data.json();
//   return json as clientData[];
// };

// const { isLoading, isError, data, error } = useQuery(["datosClientes"], getClientsData);
</script>
