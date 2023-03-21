<template>
  <section id="Contacto" class="h-auto overflow-hidden flex w-full">
    <div class="w-full max-w-7xl my-14 mx-auto">
      <div class="max-w-4xl text-center mx-auto py-16">
        <h1 class="text-black text-5xl font-semibold py-5">
          <span class="text-yellowBase">¡Hola!</span> Muchas gracias
        </h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam atque saepe
          dolore recusandae in, adipisci Lorem, ipsum dolor sit amet consectetur
          adipisicing eli
        </p>
      </div>

      <div
        class="grid grid-cols-[50%_40%] box-border grid-rows-2 gap-y-2 gap-x-10 cols justify-center"
      >
        <div
          class="bg-yellowBase col-start-1 col-end-2 flex flex-col justify-center space-y-7 px-10 font-poppins"
        >
          <h3 class="text-3xl">¿Necesitas que te guiemos?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nostrum
            obcaecati eius dolore aliquid ab nam, non rem ea libero, voluptatum nemo. Id
            magni ducimus quisquam a, enim dolorum accusantium.
          </p>
          <button
            class="text-black rounded-lg px-5 py-3 bg-gray-200 w-fit font-semibold text-xl"
          >
            ¡Comencemos!
          </button>
        </div>

        <div
          class="bg-black text-white col-start-1 col-end-2 flex flex-col justify-center space-y-7 px-10 font-poppins"
        >
          <h3 class="text-3xl">¿Ya tienes claro lo que necesitas?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio at incidunt,
            officia laborum ipsum, accusantium, fugit voluptates aliquam unde maiores.
            Ducimus alias dolores
          </p>
          <button
            class="text-black rounded-lg px-5 py-3 bg-gray-200 w-fit font-semibold text-xl"
          >
            ¡Comencemos!
          </button>
        </div>

        <div class="col-start-2 col-end-3 row-start-1 row-end-3">
          <Form></Form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Form from "../Form.vue";
</script>
