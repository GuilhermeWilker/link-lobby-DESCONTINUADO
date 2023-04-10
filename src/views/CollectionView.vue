<script setup>
import Collections from "../components/Collections.vue";

import Navbar from "../components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <Collections />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 50px;
}
</style>
