<template>
  <div>
    <Social :topPadding="spacingTop"></Social>
    <NavbarVue ref="height"></NavbarVue>
    <InicioVue :topPadding="spacingTop"></InicioVue>
    <NosotrosVue :topPadding="spacingTop"></NosotrosVue>
    <ServiciosVue :topPadding="spacingTop"></ServiciosVue>
    <PortafolioVue :topPadding="spacingTop"></PortafolioVue>
    <ContactoVue :topPadding="spacingTop"></ContactoVue>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  InicioVue,
  NosotrosVue,
  PortafolioVue,
  ServiciosVue,
  ContactoVue,
} from "@/components/sections";
import NavbarVue from "@/components/Navbar.vue";
import Social from "@/components/Social.vue";

const height = ref<any>(undefined);

const spacingTop = ref<number>(24);
onMounted(() => {
  spacingTop.value = height.value.$el.offsetHeight;
});
</script>

<style scoped></style>
