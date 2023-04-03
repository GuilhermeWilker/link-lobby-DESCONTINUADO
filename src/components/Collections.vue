<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);
const inputValue = ref("");
const collections = ref([]);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function createCollection() {
  if (!inputValue.value) {
    alert("O valor do input não pode estar vazio!");
    return;
  }
  collections.value.push(inputValue.value);
  inputValue.value = "";
  closeModal();
}
</script>

<template>
  <main>
    <header class="collection_header">
      <h3>Sua Coleção</h3>
      <button @click="openModal" class="collection_button">
        <img src="/images/icons/plus-icon.png" alt="" />
        Criar nova Coleção
      </button>

      <transition name="fade" appear>
        <div v-if="isModalOpen" class="collection_modal">
          <p>Nome da sua coleção</p>
          <input
            type="text"
            v-model="inputValue"
            placeholder="Digite o nome da sua coleção"
          />
          <button @click="createCollection">Add</button>
        </div>
      </transition>
    </header>

    <aside id="collections" class="collections">
      <div class="collection_paragraph">
        <p>
          Mantenha seus links ainda mais organizados criando coleções, separando
          por categoria os seus interesses..
        </p>
      </div>

      <div class="collection">
        <img src="/images/icons/folder-icon.png" />
        <p>Coleção de Artigos</p>
      </div>
      <div class="collection">
        <img src="/images/icons/folder-icon.png" />
        <p>Coleção de Artigos</p>
      </div>
      <div class="collection">
        <img src="/images/icons/folder-icon.png" />
        <p>Coleção de Artigos</p>
      </div>

      <div
        v-for="(collection, index) in collections"
        :key="index"
        class="collection"
      >
        <img src="/images/icons/folder-icon.png" />
        <p>{{ collection }}</p>
      </div>
    </aside>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
.collection_header {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  width: 385px;

  text-align: center;
}

.collection_button {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 17px;

  width: 320px;
  height: 54px;
  font-size: 15px;

  border: 1px solid #e2e2e2;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  cursor: pointer;
}

.collection_button:hover {
  background-color: #fcfcfc;
}

.collections {
  padding-top: 20px;
  margin: 0 auto;
  width: 780px;
  margin-top: 50px;
  border-top: 2px solid #eeeeee;

  display: flex;
  flex-wrap: wrap;

  gap: 18px;
}

.collection {
  display: flex;
  align-items: center;
  gap: 25px;
  font-weight: 600;

  font-size: 18px;

  width: 380px;
  height: 55px;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  cursor: pointer;
}

.collection:hover {
  background-color: #fcfcfc;
}

.collection img {
  padding-left: 20px;
}

.collection_modal {
  padding: 0 15px;
  margin-top: 14px;
  width: 378px;
  height: 90px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
.collection_modal p {
  font-size: 15px;
  text-align: left;
  font-weight: 600;

  margin-bottom: 4px;
}

.collection_modal input {
  width: 300px;
  padding: 8px 5px;
  margin-right: 15px;
}

.collection_modal button {
  padding: 7px;
  cursor: pointer;
}

.collection_paragraph {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #818181;
}

.collection_paragraph p {
  width: 320px;
  font-family: "Work Sans", sans-serif;
}
</style>
