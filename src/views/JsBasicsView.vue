<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full flex flex-col items-center gap-4">
    <div class="flex flex-col gap-2 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5">
      <h1 class="text-3xl font-bold text-primary">JavaScript Grundlagen</h1>
      <RouterView />
    </div>
  </div>
</template>