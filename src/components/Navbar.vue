<script setup>
import { RouterLink, useRouter } from "vue-router";
import auth from "../composable/auth";

const router = useRouter();

const signOut = async () => {
  // const { error } = await supabase.auth.signOut();
  auth.signOut();
  router.push("/");
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
