<template>
  <div class="h-screen bg-grayBase flex items-center">
    <div class="bg-bg-base mx-auto max-w-xs rounded-md p-10 w-4/5">
      <div v-if="error" class="bg-red-700 text-white text-lg rounded-md p-2 mb-5">
        Error: Falta ingresar usuario o contraseña
      </div>
      <form class="flex flex-col space-y-3" @submit.prevent="login">
        <input
          type="text"
          class="bg-transparent border-b-2 text-white border-yellowBase placeholder:text-white outline-none py-2 px-3"
          name="Usuario"
          id="Usuario"
          placeholder="Usuario"
          v-model="username"
        />
        <input
          type="password"
          class="bg-transparent border-b-2 text-white border-yellowBase placeholder:text-white outline-none py-2 px-3"
          name="Contraseña"
          id="Contraseña"
          placeholder="Contraseña"
          v-model="password"
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

<script setup lang="ts">
import { ref } from "vue";
const error = ref<boolean>(false);
const username = ref<string>("");
const password = ref<string>("");
const login = () => {
  if (!username.value || !password.value) return (error.value = true);
  console.log(username.value, password.value);

  fetch(import.meta.env.VITE_API_URL + "/auth/login", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({ username: username.value, password: password.value }), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
  username.value = "";
  password.value = "";
  error.value = false;
};
</script>
