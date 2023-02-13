<template>
  <section
    id="Servicios"
    class="min-h-screen h-auto bg-bg-base overflow-hidden flex w-full justify-center"
  >
    <div class="flex w-full my-12 max-w-7xl" :style="{ paddingTop: topPadding + 'px' }">
      <div class="w-1/12"></div>

      <div v-if="boolService" class="w-9/12">
        <div class="flex justify-center h-full items-center">
          <!-- <h1 v-if="isLoadingDev" class="text-redBase">"CARGANDO"</h1> -->

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
      </div>

      <div v-else class="w-10/12 flex justify-center items-center">
        <div class="grid grid-cols-4 gap-3 justify-center max-w-3xl h-min">
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
      </div>

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
      </div>
    </div>
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

interface Props {
  topPadding: number;
}
defineProps<Props>();

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
