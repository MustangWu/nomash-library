<template>
  <div>
    <button class="btn btn-outline-secondary mb-2" @click="load">Reload</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="b in books" :key="b.id"><strong>{{ b.isbn }}</strong> — {{ b.name }}</li>
    </ul>
    <div class="mt-3">
      <button class="btn btn-warning me-2" v-if="books[0]" @click="updateFirst">Update First</button>
      <button class="btn btn-danger" v-if="books[0]" @click="deleteFirst">Delete First</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '@/firebase/init'
import { collection, query, where, orderBy, limit, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const books = ref([])

const load = async () => {
  books.value = []
  const q = query(
    collection(db,'books'),
    where('isbn','>',1000),  
    orderBy('isbn','asc'),
    limit(10)
  )
  const snap = await getDocs(q)
  snap.forEach(d => books.value.push({ id:d.id, ...d.data() }))
}

const updateFirst = async () => {
  if (!books.value[0]) return
  const id = books.value[0].id
  await updateDoc(doc(db,'books',id), { name: '(updated) '+books.value[0].name })
  await load()
}
const deleteFirst = async () => {
  if (!books.value[0]) return
  const id = books.value[0].id
  await deleteDoc(doc(db,'books',id))
  await load()
}

load()
</script>
