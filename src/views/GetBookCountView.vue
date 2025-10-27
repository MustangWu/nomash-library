<template>
  <div class="container py-4">
    <h2>Book Counter</h2>
    <button class="btn btn-secondary" @click="getCount">Get Count</button>
    <p v-if="count !== null">Total books: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const count = ref(null)
const getCount = async () => {
  const res = await axios.get('https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/countBooks')
  count.value = res.data.count
}
</script>
