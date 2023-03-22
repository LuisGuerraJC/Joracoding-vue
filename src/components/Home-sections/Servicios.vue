<template>
  <section id="Servicios" class="h-auto flex w-full justify-center">
    <div class="w-full my-12 max-w-7xl">
      <div class="flex flex-col justify-center">
        <!-- <h1 v-if="isLoadingDev" class="text-redBase">"CARGANDO"</h1> -->
        <div class="font-poppins text-center space-y-3">
          <h2 class="font-semibold text-5xl">Explora nuestros planes</h2>
          <p class="text-lg font-light">
            ¡Tenemos planes pensados para tu emprendedor interno!
          </p>
        </div>

        <div class="flex justify-center space-x-7 py-16">
          <SpinnerVue v-if="isLoadingDev"></SpinnerVue>
          <h1 v-if="isErrorDev" class="text-redBase">{{ errorDev }}</h1>
          <WbServicesVue :data="devData!"> </WbServicesVue>
        </div>

        <div class="flex w-full space-x-2 justify-center pt-16 py-16">
          <div
            v-for="number in [1, 2, 3, 4]"
            :key="number"
            class="h-2 w-16 flex"
            :class="{ 'bg-yellowBase': number === 2, 'bg-black': number !== 2 }"
          ></div>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <div class="font-poppins text-center space-y-4">
          <h2 class="font-semibold text-5xl">Explora nuestros planes</h2>
          <p class="text-lg font-light">
            ¡Tenemos planes pensados para tu emprendedor interno!
          </p>
        </div>

        <div
          class="grid grid-cols-4 gap-6 justify-center items-center h-min justify-items-center"
        >
          <SpinnerVue v-if="isLoadingDesign"></SpinnerVue>
          <h1 v-if="isErrorDesign" class="text-redBase">{{ errorDesign }}</h1>
          <DesignServicesVue :data="designData!"> </DesignServicesVue>
        </div>

        <div class="flex w-full space-x-2 justify-center pt-16">
          <div
            v-for="number in [1, 2, 3, 4]"
            :key="number"
            class="h-2 w-16 flex"
            :class="{ 'bg-yellowBase': number === 2, 'bg-black': number !== 2 }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import DesignServicesVue from "../DesignServices.vue";
import WbServicesVue from "../WbServices.vue";
import SpinnerVue from "../Spinner.vue";
// import type devService from "../../interfaces/devService";
// import type designService from "../../interfaces/designService";

import { getDesignData } from "@/api/getDesignData";
import { getDevData } from "@/api/getDevData";

const {
  data: devData,
  isLoading: isLoadingDev,
  isError: isErrorDev,
  error: errorDev,
} = useQuery(["webServices"], getDevData);

const {
  data: designData,
  isLoading: isLoadingDesign,
  isError: isErrorDesign,
  error: errorDesign,
} = useQuery(["designServices"], getDesignData);
</script>
