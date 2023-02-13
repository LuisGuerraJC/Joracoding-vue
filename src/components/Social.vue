<template>
  <div
    class="fixed top-0 left-0 max-w-[106.6px] w-1/12 h-screen z-20 flex flex-col items-center bg-bg-base shadow-lg shadow-black"
  >
    <div class="space-y-8" :style="{ marginTop: topPadding + 'px' }">
      <Facebook
        class="text-white hover:text-yellowBase transition-transform hover:scale-125 text-2xl"
      ></Facebook>

      <Instagram
        class="text-white hover:text-yellowBase transition-transform hover:scale-125 text-2xl"
      ></Instagram>
      <Whatsapp
        class="text-white hover:text-yellowBase transition-transform hover:scale-125 text-2xl"
      ></Whatsapp>
    </div>
  </div>
</template>

<script setup lang="ts">
import Facebook from "~icons/mdi/facebook";
import Instagram from "~icons/mdi/instagram";
import Whatsapp from "~icons/mdi/whatsapp ";

interface Props {
  topPadding: number;
}
defineProps<Props>();
</script>
i
