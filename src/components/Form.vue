<template>
  <div
    class="flex flex-col justify-center items-center p-12 rounded-lg shadow-lg shadow-gray-300"
  >
    <div class="text-start w-full mb-4">
      <h2 class="w-full text-black text-5xl font-semibold">Contacto</h2>
    </div>
    <form class="grid grid-cols-2 gap-4 w-full space-y-5">
      <input
        class="bg-transparent border-b-2 border-gray-300 placeholder:text-gray-300 outline-none py-2 px-3 col-start-1 col-end-3"
        type="text"
        name=""
        id="Nombre-apellido"
        placeholder="Nombre y Apellidos"
      />

      <input
        class="bg-transparent border-b-2 border-gray-300 col-start-1 col-end-3 placeholder:text-gray-300 outline-none py-2 px-3"
        type="text"
        name=""
        id="Correo"
        placeholder="Correo"
      />
      <select
        name="Proyecto"
        class="outline-none col-start-1 col-end-3 border-b-2 border-gray-300 py-2 px-3 placeholder:text-gray-300 text-gray-300"
        id="Proyecto"
        placeholder="Proyecto"
      >
        <option class="outline-none text-black border-none py-2 px-3" value="1">
          oe mierda
        </option>
        <option class="outline-none text-black border-none py-2 px-3" value="2">
          ya no se
        </option>
        <option class="outline-none text-black border-none py-2 px-3" value="3">
          me para
        </option>
      </select>
      <textarea
        name=""
        id=""
        class="outline-none bg-transparent resize-none col-start-1 col-end-3 border-b-2 border-gray-300 px-3 placeholder:text-white h-32"
        placeholder="Mensaje"
      ></textarea>
      <div class="col-start-1 col-end-3 flex">
        <input
          type="submit"
          value="Enviar"
          class="bg-black font-semibold text-xl tracking-wide text-white py-4 w-full font-poppins rounded-lg"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
