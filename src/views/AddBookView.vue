<template>
  <div class="container py-4">
    <h2>Add Book</h2>
    <form @submit.prevent="addBook" class="row g-3">
      <div class="col-md-4"><label class="form-label">ISBN (number)</label><input v-model.number="isbn" type="number" required class="form-control"/></div>
      <div class="col-md-8"><label class="form-label">Name</label><input v-model="name" type="text" required class="form-control"/></div>
      <div class="col-12"><button class="btn btn-primary" type="submit">Add</button></div>
      <p class="text-danger" v-if="err">{{ err }}</p>
      <p class="text-success" v-if="ok">Added to Firestore (collection: books)</p>
    </form>

    <hr class="my-4"/>
    <h4>Book List (isbn > 1000, where + orderBy + limit)</h4>
    <BookList/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '@/firebase/init'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import BookList from '@/components/BookList.vue'

const isbn = ref(); const name = ref(''); const err = ref(''); const ok = ref(false)
const addBook = async () => {
  err.value=''; ok.value=false
  try {
    await addDoc(collection(db,'books'), {
      isbn: Number(isbn.value),  
      name: name.value,
      createdAt: serverTimestamp()
    })
    ok.value=true; name.value=''; isbn.value=null
  } catch(e){ console.error(e); err.value = e.code || String(e) }
}
</script>
