<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen p-3 h-full">
    <header class="pb-3">
      <Navbar />
    </header>
    <main class="flex-1">
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
