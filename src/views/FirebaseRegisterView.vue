<template>
  <div class="container py-4">
    <h2>Firebase Register</h2>
    <form @submit.prevent="onRegister" class="row g-3">
      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" required class="form-control"/>
      </div>
      <div class="col-md-6">
        <label class="form-label">Password</label>
        <input v-model="password" type="password" required class="form-control"/>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Create Account</button>
      </div>
      <p class="text-danger" v-if="err">{{ err }}</p>
      <p class="text-success" v-if="ok">Registered — check Firebase Authentication → Users</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase/init'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref(''); const password = ref('')
const err = ref(''); const ok = ref(false)

const onRegister = async () => {
  err.value=''; ok.value=false
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('Registered user:', cred.user?.email)
    ok.value = true
  } catch (e) {
    console.error(e); err.value = e.code || String(e)
  }
}
</script>
