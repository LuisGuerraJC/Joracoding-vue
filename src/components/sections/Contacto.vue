<template>
  <section
    id="Contacto"
    class="min-h-screen h-auto bg-bg-base overflow-hidden flex w-full"
    :style="{ paddingTop: topPadding + 'px' }"
  >
    <div class="w-full max-w-7xl grid grid-cols-12 my-14 mx-auto text-white">
      <div
        class="col-start-5 col-end-11 flex flex-col justify-center space-y-14 items-center"
      >
        <div class="text-center">
          <h2 class="text-yellowBase text-3xl mb-4">¿Cómo podemos ayudarte?</h2>
          <p class="text-xl">Escríbenos para darte asesoramiento en tu proyecto</p>
        </div>
        <form class="grid grid-cols-2 gap-4 w-5/6">
          <input
            class="bg-transparent border-b-2 border-yellowBase placeholder:text-white outline-none py-2 px-3"
            type="text"
            name=""
            id="Nombre"
            placeholder="Nombre"
          />
          <input
            class="bg-transparent border-b-2 border-yellowBase placeholder:text-white outline-none py-2 px-3"
            type="text"
            name=""
            id="Apellido"
            placeholder="Apellido"
          />
          <input
            class="bg-transparent border-b-2 border-yellowBase col-start-1 col-end-3 placeholder:text-white outline-none py-2 px-3"
            type="text"
            name=""
            id="Correo"
            placeholder="Correo"
          />
          <select
            name="Proyecto"
            class="bg-bg-base outline-none col-start-1 col-end-3 border-b-2 border-yellowBase py-2 px-3"
            id="Proyecto"
            placeholder="Proyecto"
          >
            <option class="bg-bg-base outline-none border-none py-2 px-3" value="pene">
              oe mierda
            </option>
            <option class="bg-bg-base outline-none border-none py-2 px-3" value="pene1">
              ya no se
            </option>
            <option class="bg-bg-base outline-none border-none py-2 px-3" value="pene2">
              me para
            </option>
          </select>
          <textarea
            name=""
            id=""
            class="outline-none bg-transparent resize-none col-start-1 col-end-3 border-b-2 border-yellowBase px-3 placeholder:text-white h-32"
            placeholder="Mensaje"
          ></textarea>
          <div class="col-start-1 col-end-3 flex">
            <input
              type="submit"
              value="Enviar"
              class="bg-yellowBase font-bold text-xl tracking-wide font-condensed py-4 px-10 w-min ml-auto justify-self-end"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  topPadding: number;
}
defineProps<Props>();
</script>
