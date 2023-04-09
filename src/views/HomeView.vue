<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <h3>HOME</h3>
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
