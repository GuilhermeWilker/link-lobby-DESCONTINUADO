<template>
  <main>
    <header>
      <h3>Sites de Referências para Design</h3>

      <div class="linkModal">
        <input type="text" v-model="inputValue" placeholder="https://.." />
        <button @click="createLink">Add</button>
      </div>
    </header>

    {{ linksCollection }}
  </main>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const linksCollection = ref([]);
const inputValue = ref("");

function createLink() {
  linksCollection.value.push(inputValue.value);
  inputValue.value = "";
}
</script>

<style scoped>
header {
  margin: 150px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

main {
  margin: 0 auto;
  max-width: 960px;
}

.linkModal {
  width: 353px;

  padding: 10px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}

.linkModal input {
  padding: 9px 10px;
  width: 290px;
}
</style>
