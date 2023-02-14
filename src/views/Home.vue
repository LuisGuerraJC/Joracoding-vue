<template>
  <div>
    <NavbarVue ref="height"></NavbarVue>
    <InicioVue></InicioVue>
    <NosotrosVue></NosotrosVue>
    <ServiciosVue></ServiciosVue>
    <ComentariosVue></ComentariosVue>
    <!-- <PortafolioVue :topPadding="spacingTop"></PortafolioVue> -->
    <ContactoVue :topPadding="spacingTop"></ContactoVue>
    <FooterVue></FooterVue>
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
  ComentariosVue,
  FooterVue,
} from "@/components/sections";
import NavbarVue from "@/components/Navbar.vue";

const height = ref<any>(undefined);

const spacingTop = ref<number>(24);
onMounted(() => {
  spacingTop.value = height.value.$el.offsetHeight;
});
</script>

<style scoped></style>
