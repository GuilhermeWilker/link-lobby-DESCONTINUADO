<script setup>
import Navbar from "../components/Navbar.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const user = ref("");
const isAuthenticate = ref(false);

const authenticate = async () => {
  const session = await supabase.auth.getSession();
  user.value = session.data.session.user;
  // console.log(user);

  if (session) {
    isAuthenticate.value = true;
  }
};

onMounted(authenticate);
</script>

<template>
  <main>
    <Navbar />
    <h3>HOME</h3>

    <p v-if="isAuthenticate">
      The user with email: <strong>{{ user.email }}</strong> is
      {{ user.role }}
    </p>

    <p v-else>
      You must be logged in <br />
      <router-link to="/login"><button>login</button></router-link>
    </p>
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

h3 {
  margin-top: 100px;
}
</style>
