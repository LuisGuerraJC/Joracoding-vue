<template>
  <div>
    <NavbarVue ref="height"></NavbarVue>
    <InicioVue></InicioVue>
    <NosotrosVue></NosotrosVue>
    <ServiciosVue></ServiciosVue>
    <ComentariosVue></ComentariosVue>
    <!-- <PortafolioVue :topPadding="spacingTop"></PortafolioVue> -->
    <ContactoVue></ContactoVue>
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
} from "@/components/Home-sections";
import NavbarVue from "@/components/Navbar.vue";
</script>

<style scoped></style>
