<template>
  <div class="container py-4">
    <h2>Firebase Sign In</h2>
    <form @submit.prevent="onSignin" class="row g-3">
      <div class="col-md-6"><label class="form-label">Email</label><input v-model="email" type="email" required class="form-control"/></div>
      <div class="col-md-6"><label class="form-label">Password</label><input v-model="password" type="password" required class="form-control"/></div>
      <div class="col-12"><button class="btn btn-success" type="submit">Sign In</button></div>
      <p class="text-danger" v-if="err">{{ err }}</p>
      <p class="text-success" v-if="ok">Signed in — check DevTools Console</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/firebase/init'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const email = ref(''); const password = ref('')
const err = ref(''); const ok = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => console.log('AuthStateChanged current user:', user?.email || null))
})

const onSignin = async () => {
  err.value=''; ok.value=false
  try {
    const cred = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('Signed in:', cred.user?.email); ok.value = true
  } catch (e) { console.error(e); err.value = e.code || String(e) }
}
</script>
