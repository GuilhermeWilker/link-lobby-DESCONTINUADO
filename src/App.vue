<script setup>
import { RouterLink, RouterView } from "vue-router";
import { supabase } from "./supabase";

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/collections">Criar coleções</RouterLink>
        <button @click="signOut">Deslogar</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 607px;
  height: 50px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}

nav {
  display: flex;
  align-items: center;

  width: 100%;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  gap: 150px;
}
</style>
