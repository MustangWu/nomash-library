<template>
  <div class="container py-4">
    <h2 class="mb-3">Get All Books (Local Emulator)</h2>
    <button class="btn btn-primary mb-3" @click="load">Load</button>
    <pre>{{ books }}</pre>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { FUNCTIONS_BASE } from '@/lib/functionsBase'
const books = ref([])
const load = async () => {
  const { data } = await axios.get(`${FUNCTIONS_BASE}/getAllBooks`)
  books.value = data
}
</script>
