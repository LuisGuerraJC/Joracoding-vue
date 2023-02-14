<template>
  <div
    class="text-white h-full my-3 mx-2 pt-8 pb-4 px-8 flex flex-col justify-between min-h-[712px] max-h-[800px] hover:bg-black hover:scale-105 overflow-y-hidden transition-all duration-150 rounded-xl"
    :class="{
      'bg-black scale-105': center === 1,
      'bg-yellowBase text-black hover:text-white ': center !== 1,
    }"
  >
    <div class="space-y-3 font-poppins">
      <h3 class="font-semibold text-2xl">{{ serviceName }}</h3>
      <h3
        class="font-bold flex group-hover:text-orange-400 text-5xl relative before:content-['S/.'] before:text-[18px] before:place-self-start before:pr-2"
      >
        {{ price }}
      </h3>
      <p class="font-semibold pt-5">Un solo pago</p>
    </div>

    <ul class="space-y-1 mt-3">
      <li v-for="(item, index) in features" :key="index" class="flex font-light text-lg">
        <IconCheck class="text-orange-400"></IconCheck>
        <p class="pl-2 first-letter:capitalize text-md font-semibold">{{ item }}</p>
      </li>
    </ul>
    <button
      type="submit"
      class="group-hover:bg-white group-hover:border-black rounded-2xl py-4 mt-5 tracking-wide text-2xl font-bold transition-colors duration-150"
      :class="{
        ' bg-white text-black': center === 1,
        'bg-black text-white': center !== 1,
      }"
    >
      Empezar
    </button>
  </div>
</template>

<script setup lang="ts">
import IconCheck from "~icons/mdi/check-bold";

interface Props {
  price: number;
  serviceName: string;
  features: string[];
  center: number;
}
defineProps<Props>();
</script>
