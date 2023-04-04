<template>
  <div>
    <h3>LINK HOME</h3>
    <div>
      <input type="text" v-model="inputValue" placeholder="https://.." />
      <button @click="createLink">Add</button>
    </div>

    {{ linksCollection }}
  </div>
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

<style lang="scss" scoped></style>
