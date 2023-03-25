<template>
  <section id="Faq" class="h-screen flex w-full">
    <div class="max-w-7xl w-full flex mx-auto">
      <div class="w-2/5 flex flex-col items-center">
        <div class="space-y-4">
          <h2 class="text-5xl">
            Preguntas <br />
            <span class="text-yellowBase">Frecuentes</span>
          </h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="w-3/5">
        <ul class="p-3">
          <li v-for="({ title, content, toggle }, index) in FAQ" :key="index">
            <div
              class="border-b-2"
              :class="{
                'border-yellowBase text-yellowBase': !toggle,
                'border-bg-base': toggle,
              }"
            >
              <h3
                class="cursor-pointer text-xl font-semibold"
                @click="changeToggle(index)"
              >
                {{ title }}
              </h3>
              <div
                class="overflow-y-hidden h-auto box-content text-bg-base transition-height duration-100"
                :class="{ 'h-0': toggle, 'p-3': !toggle }"
              >
                {{ content }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface question {
  title: string;
  content: string;
  toggle: boolean;
}

const FAQ = ref<question[]>([
  {
    title: "¿Como contratar sus servicios?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam blanditiis dolore aut dolorem, praesentium laudantium quas deleniti nemo quasi iusto accusamus odio ipsa laboriosam ipsam libero cupiditate ratione non eveniet.",
    toggle: true,
  },
  {
    title: "¿Realizan proyectos personalizados?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam blanditiis dolore aut dolorem, praesentium laudantium quas deleniti nemo quasi iusto accusamus odio ipsa laboriosam ipsam libero cupiditate ratione non eveniet.",
    toggle: true,
  },
  {
    title: "¿Qué procedimientos tienen?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam blanditiis dolore aut dolorem, praesentium laudantium quas deleniti nemo quasi iusto accusamus odio ipsa laboriosam ipsam libero cupiditate ratione non eveniet.",
    toggle: true,
  },
  {
    title: "¿Como contratar sus servicios?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam blanditiis dolore aut dolorem, praesentium laudantium quas deleniti nemo quasi iusto accusamus odio ipsa laboriosam ipsam libero cupiditate ratione non eveniet.",
    toggle: true,
  },
]);

const changeToggle = (index: number) => {
  FAQ.value[index].toggle = !FAQ.value[index].toggle;
};
</script>
