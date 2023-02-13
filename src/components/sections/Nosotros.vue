<template>
  <section id="Nosotros" class="min-h-screen bg-bg-base flex w-full">
    <div class="w-[60%] text-white">
      <div
        :style="{ paddingTop: topPadding + 'px' }"
        class="max-w-md ml-auto mr-[10%] min-h-full my-auto flex flex-col justify-around pb-20"
      >
        <div>
          <div class="space-y-5 mt-11">
            <h2 class="text-yellowBase text-3xl font-bold tracking-wider">
              Nuestra Historia
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nihil
              harum sunt unde fuga dicta incidunt facilis repellat doloremque reiciendis
              accusantium possimus. Ipsum nobis eaque, quidem consequatur numquam neque
              enim?
              <br />
              <br />

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consectetur
              nihil dolor suscipit ea odit error tempora recusandae. Excepturi magni ipsum
              tempora at doloremque delectus quibusdam esse adipisci nam dignissimos.
            </p>
          </div>

          <div class="w-3/4 flex justify-between mt-14">
            <div v-if="isLoading">
              <SpinnerVue></SpinnerVue>
            </div>
            <div v-if="isError">{{ error }}</div>
            <div
              v-for="({ cantidad, servicio }, index) in data"
              :key="index"
              class="w-min text-center"
            >
              <p class="text-yellowBase font-condensed text-5xl">{{ cantidad }}</p>
              <h3 class="m-0">{{ servicio }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <aside class="w-[40%]">
      <img src="/images/fondoNosotros.jpg" alt="" class="w-full h-full object-cover" />
    </aside>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import SpinnerVue from "../Spinner.vue";
import type clientData from "../interfaces/clientData";

interface Props {
  topPadding: number;
}
defineProps<Props>();

const getClientsData = async (): Promise<clientData[]> => {
  const data = await fetch("/src/json/clientes.json");
  const json = await data.json();
  return json as clientData[];
};

const { isLoading, isError, data, error } = useQuery(["datosClientes"], getClientsData);
</script>
