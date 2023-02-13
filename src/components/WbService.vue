<template>
  <div
    class="group border-[1px] border-cyan-900 text-white h-full my-3 mx-2 py-10 px-8 flex flex-col justify-between max-h-[720px] hover:bg-cyan-900 overflow-y-hidden transition-colors duration-150 shadow-md shadow-cyan-900"
    :class="{ 'bg-cyan-900': center === 1 }"
  >
    <div class="space-y-2">
      <h3 class="font-semibold text-yellowBase text-4xl">S/ {{ price }}</h3>
      <h3 class="font-semibold text-2xl">{{ serviceName }}</h3>
    </div>

    <ul class="space-y-3 mt-3">
      <li v-for="(item, index) in features" :key="index" class="flex font-light">
        <IconCheck class="text-yellowBase"></IconCheck>
        <p class="pl-2 first-letter:capitalize text-md font-semibold">{{ item }}</p>
      </li>
    </ul>
    <button
      type="submit"
      class="border-4 group-hover:bg-blueBase group-hover:border-blueBase group-hover:text-white border-grayBase rounded-full px-6 py-1 mt-5 w-fit font-condensed tracking-wide text-lg text-grayBase font-semibold transition-colors duration-150"
    >
      ¡Lo quiero!
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
