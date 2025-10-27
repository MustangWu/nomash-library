<template>
  <div class="container py-4">
    <h2 class="mb-3">Count Books (Local Emulator)</h2>
    <button class="btn btn-secondary mb-3" @click="load">Get Count</button>
    <p v-if="count !== null">Total books: {{ count }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { FUNCTIONS_BASE } from '@/lib/functionsBase'
const count = ref(null)
const load = async () => {
  const { data } = await axios.get(`${FUNCTIONS_BASE}/countBooks`)
  count.value = data.count
}
</script>


