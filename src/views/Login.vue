<template>
  <div class="h-screen bg-grayBase flex items-center">
    <div class="bg-bg-base mx-auto max-w-xs rounded-md p-10 w-4/5">
      <form class="flex flex-col space-y-3">
        <input
          type="text"
          class="bg-transparent border-b-2 text-white border-yellowBase placeholder:text-white outline-none py-2 px-3"
          name="Usuario"
          id="Usuario"
          placeholder="Usuario"
        />
        <input
          type="password"
          class="bg-transparent border-b-2 text-white border-yellowBase placeholder:text-white outline-none py-2 px-3"
          name="Contraseña"
          id="Contraseña"
          placeholder="Contraseña"
        />
        <input
          type="submit"
          value="Enviar"
          class="bg-yellowBase font-bold text-lg tracking-wide font-condensed py-2 px-5 w-min ml-auto justify-self-end"
        />
      </form>
    </div>
  </div>
</template>
