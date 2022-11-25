<script setup lang="ts">
import { ref } from "vue";
import { ABOUT_PAGE } from "@util/Constant/";
</script>

<template>
  <section class="flex flex-col items-start justify-start w-full h-full py-6">
    <div
      class="flex flex-col transition-all transform ease-in-out delay-500 gap-y-6 items-start h-auto"
    >
      <h1 class="text-7xl lg:text-8xl text-white font-sans">
        {{ ABOUT_PAGE.TITLE }}
      </h1>
      <span class="flex text-4xl font-medium text-red-500">
        {{ ABOUT_PAGE.ROLE }}
      </span>
      <span class="flex text-3xl font-sans text-red-500">
        {{ ABOUT_PAGE.ABOUT }}
      </span>
    </div>
  </section>
</template>
