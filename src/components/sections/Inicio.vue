<template>
  <section id="Inicio">
    <img
      src="/images/fondo1.jpg"
      alt="fondo1"
      class="absolute w-full h-full object-cover mix-blend-overlay"
    />
    <main
      class="min-h-screen h-auto text-white w-full bg-gradient-to-t from-bg-base to-bg-base flex justify-center"
    >
      <!-- bg-base -->
      <div
        class="max-w-7xl flex w-full items-center"
        :style="{ paddingTop: topPadding + 'px' }"
      >
        <div class="w-1/12"></div>

        <aside class="font-condensed max-w-xl space-y-5 ml-4">
          <div class="relative">
            <h1 class="text-7xl font-bold leading-[1.1] text-yellowBase">
              ¿QUIERES LLEGAR<br />
              A MAS CLIENTES POTENCIALES?
            </h1>
            <h1
              class="absolute top-1 left-1 text-7xl font-bold leading-[1.1] text-aquaBase"
            >
              ¿QUIERES LLEGAR<br />
              A MAS CLIENTES POTENCIALES?
            </h1>
          </div>

          <p class="text-3xl font-light">
            ¡Somos una agencia digital de diseño que busca a desarrollar tu marca!
          </p>
        </aside>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
interface Props {
  topPadding: number;
}
defineProps<Props>();
</script>
