<template>
  <section id="Servicios" class="h-auto flex w-full justify-center">
    <div class="w-full my-12 max-w-7xl">
      <div class="flex flex-col justify-center">
        <!-- <h1 v-if="isLoadingDev" class="text-redBase">"CARGANDO"</h1> -->
        <div class="font-poppins text-center space-y-4">
          <h2 class="font-semibold text-5xl">Explora nuestros planes</h2>
          <p class="text-lg font-light">
            ¡Tenemos planes pensados para tu emprendedor interno!
          </p>
        </div>
        <div class="flex justify-center space-x-7">
          <SpinnerVue v-if="isLoadingDev"></SpinnerVue>
          <h1 v-if="isErrorDev" class="text-redBase">{{ errorDev }}</h1>
          <WbServiceVue
            v-for="({ serviceName, features, price }, index) in devData"
            :key="index"
            :features="features"
            :price="price"
            :serviceName="serviceName"
            :center="index"
          >
          </WbServiceVue>
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
          <!-- <h1 v-if="isLoadingDesign" class="text-redBase">"CARGANDO"</h1> -->

          <SpinnerVue v-if="isLoadingDesign"></SpinnerVue>
          <h1 v-if="isErrorDesign" class="text-redBase">{{ errorDesign }}</h1>
          <DesignServiceVue
            v-for="({ serviceName, features, price }, index) in designData"
            :key="index"
            :features="features"
            :price="price"
            :serviceName="serviceName"
          >
          </DesignServiceVue>
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
    <!-- 
      <div class="w-2/12 flex items-center justify-center">
        <ul class="space-y-3">
          <li
            class="border-[1px] border-grayBase bg-grayBase rounded-full py-1 px-5 text-center cursor-pointer font-condensed font-bold text-lg"
            v-for="(item, index) in tipoServicio"
            :key="index"
            :class="{ 'bg-yellowBase': index === Number(!boolService) }"
            @click="swipeServices(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div> -->
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import DesignServiceVue from "../DesignService.vue";
import WbServiceVue from "../WbService.vue";
import SpinnerVue from "../Spinner.vue";
import type devService from "../interfaces/devService";
import type designService from "../interfaces/designService";

const boolService = ref<number>(1);
const swipeServices = (index: number) => {
  //index 1 apunta a servicios de diseño grafico
  if (index === 1 && boolService.value === 1) boolService.value = 0;
  //index 0 apunta a servicios de desarrollo web
  if (index === 0 && boolService.value === 0) boolService.value = 1;
};

const tipoServicio: string[] = ["Desarrollo Web", "Diseño Gráfico"];

const getDevData = async (): Promise<devService[]> => {
  const data = await fetch("/src/json/devServices.json");
  const json = await data.json();

  return json as devService[];
};
const {
  data: devData,
  isLoading: isLoadingDev,
  isError: isErrorDev,
  error: errorDev,
} = useQuery(["webServices"], getDevData);

const getDesignData = async (): Promise<designService[]> => {
  const data = await fetch("/src/json/designServices.json");
  const json = await data.json();
  return json as designService[];
};

const {
  data: designData,
  isLoading: isLoadingDesign,
  isError: isErrorDesign,
  error: errorDesign,
} = useQuery(["designServices"], getDesignData);
</script>
