<template>
  <section id="Inicio">
    <main class="h-auto w-full bg-white flex justify-center">
      <!-- bg-base -->
      <div class="max-w-7xl flex w-10/12 items-center">
        <aside class="font-poppins max-w-xl space-y-7 ml-4 text-black">
          <h1 class="text-5xl font-bold leading-[1.1]">Diseño Web a Medida</h1>

          <p class="text-xl font-light max-w-lg">
            Ofrecemos servicios de diseño web profesionales con soluciones única a medida
            para mejorar la presencia de su empresa.
          </p>
          <button
            class="bg-black rounded-md px-9 py-3 text-white text-xl flex items-center"
          >
            ¡Comencemos!
          </button>

          <!-- para la navegacion -->
          <div class="flex w-full space-x-2">
            <div
              v-for="number in [1, 2, 3, 4]"
              :key="number"
              class="h-1 w-14 flex"
              :class="{ 'bg-yellowBase': number === 2, 'bg-black': number !== 2 }"
            ></div>
          </div>
        </aside>
        <div class="h-full grow flex justify-center items-center">
          <div class="bg-yellowBase w-[512px] h-[512px] rounded-full"></div>
        </div>
      </div>
    </main>
  </section>
</template>
