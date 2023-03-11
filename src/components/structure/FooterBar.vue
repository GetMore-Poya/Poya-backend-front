<script setup>
import { containerMaxW } from "@/config.js";
import BaseLevel from "@/components/global/BaseLevel.vue";


const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6 mb-2" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="https://justboil.me/" target="_blank">Poya</a>.</b
        >
        <slot />
      </div>
      <div class="md:py-2">
      
      </div>
    </BaseLevel>
  </footer>
</template>
