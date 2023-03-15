<template>
  <section
    id="Portafolio"
    class="min-h-screen h-auto bg-bg-base overflow-hidden flex w-full"
    :style="{ paddingTop: topPadding + 'px' }"
  >
    <div class="my-14 flex w-full">
      <div class="w-1/12"></div>

      <div v-if="boolService" class="flex justify-center w-9/12">
        <div class="flex justify-center max-w-3xl bg-slate-600 w-full"></div>
      </div>

      <div v-else class="w-9/12 flex justify-center items-center">
        <div
          class="grid grid-cols-4 grid-rows-3 gap-3 justify-center items-center max-w-3xl w-full h-min"
        >
          <div v-for="index in 12" :key="index" class="bg-slate-600 aspect-[2/1]"></div>
        </div>
      </div>

      <div class="w-3/12 flex items-center">
        <ul class="space-y-3">
          <li
            class="border-[1px] border-grayBase bg-grayBase rounded-full py-1 px-5 text-center cursor-pointer font-poppins font-bold text-lg"
            :class="{ 'bg-yellowBase': index === Number(!boolService) }"
            v-for="(item, index) in tipoServicio"
            :key="index"
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
import { ref } from "vue";

interface Props {
  topPadding: number;
}
defineProps<Props>();

const boolService = ref<number>(1);
const swipeServices = (index: number) => {
  console.log(index);
  //index 1 apunta a servicios de diseño grafico
  if (index === 1 && boolService.value === 1) boolService.value = 0;
  //index 0 apunta a servicios de desarrollo web
  if (index === 0 && boolService.value === 0) boolService.value = 1;
};

const tipoServicio: string[] = ["Desarrollo Web", "Diseño Gráfico"];
</script>
