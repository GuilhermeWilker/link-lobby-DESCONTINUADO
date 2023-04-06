<script setup>
import { reactive, ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

const erro_message = ref(false);
const router = useRouter();

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;
    console.log(user);

    router.push("/");
  } catch (error) {
    console.error(error);
    erro_message.value = true;
  }
};
</script>
<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <h1>Login de usuário</h1>

      <label>Email </label>
      <input type="email" v-model="form.email" />
      <label>Senha </label>
      <input type="password" v-model="form.password" />
      <button type="submit">Login</button>

      <p v-if="erro_message">Usuário não existe!!</p>
    </form>
  </div>
</template>

<style scoped>
div {
  margin: 120px auto;
  width: 500px;
}
p {
  color: red;
}

.form {
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border: 1px solid black;
  padding: 25px;

  width: 350px;
}

.form h1 {
  text-align: center;
}

.form label {
  font-weight: 600;
}

.form input {
  padding: 5px;
  margin-bottom: 20px;
}

.form button {
  height: 50px;
  width: 150px;

  margin-inline: auto;
}
</style>
