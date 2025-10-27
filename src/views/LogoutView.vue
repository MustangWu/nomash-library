<template>
  <div class="container py-4">
    <h2>Logout</h2>
    <button class="btn btn-outline-danger" @click="doLogout">Sign Out</button>
    <p class="mt-3">Open DevTools Console to verify current user becomes null after sign out.</p>
  </div>
</template>

<script setup>
import { auth } from '@/firebase/init'
import { signOut, onAuthStateChanged } from 'firebase/auth'
onAuthStateChanged(auth, (u)=>console.log('Logout page — current user:', u?.email || null))
const doLogout = async ()=>{ await signOut(auth); console.log('Signed out.') }
</script>
