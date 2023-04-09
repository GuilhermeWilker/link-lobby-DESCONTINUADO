<script setup>
import { reactive } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;
    console.log("Novo usuário criado: ", user);

    router.push("/");
  } catch (error) {
    console.error("Erro ao criar usuário: ", error);
  }
};
</script>

<template>
  <div>
    <main>
      <section class="hero">
        <h4 class="subtitle">O melhor lugar para salvar links de</h4>
        <h1 class="title">ARTIGOS</h1>
      </section>
      <form class="form" @submit.prevent="handleSubmit">
        <h2>Que legal que tomou esse iniciativa! Cadastre-se abaixo:</h2>

        <div class="nome_input">
          <label>Nome </label>
          <input
            type="text"
            v-model="form.name"
            placeholder="Joab Manoel"
            required
          />
        </div>
        <div class="email_input">
          <label>Email </label>
          <input
            type="email"
            v-model="form.email"
            placeholder="seuemail@email.com"
            required
          />
        </div>
        <div class="senha_input">
          <label>Senha </label>
          <input
            type="password"
            v-model="form.password"
            placeholder="********"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </main>
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
  width: 100%;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  background-color: #e9e9e9;
  width: 720px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.subtitle {
  font-weight: 600;
  font-size: 25px;
}

.title {
  font-weight: 800;
  font-size: 110px;
  font-family: "Montserrat", sans-serif;
}
.form {
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  padding: 25px;

  width: 390px;
}

.form h2 {
  margin-bottom: 35px;
  font-size: 25px;
}

.form .nome_input {
  display: flex;
  flex-direction: column;
}

.form .nome_input label {
  font-weight: 600;
}

.form .nome_input input {
  padding: 12px 8px;

  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
}

.form .email_input {
  display: flex;
  flex-direction: column;
}

.form .email_input label {
  font-weight: 600;
}

.form .email_input input {
  padding: 12px 8px;

  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
}

.form .senha_input {
  display: flex;
  flex-direction: column;
}

.form .senha_input label {
  font-weight: 600;
}

.form .senha_input input {
  padding: 12px 8px;

  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
}

.form button {
  margin: 10px 0;
  cursor: pointer;
  height: 50px;
  width: 100%;

  background-color: #141313;
  border: 1px solid #141313;
  color: #fff;

  font-weight: 600;
  margin-inline: auto;
}

.form button:hover {
  background-color: #2e2d2d;
}
</style>
