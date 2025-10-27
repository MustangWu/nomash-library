<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div>
    <BHeader />
    <router-view />
  </div>
</template>

<style>
.container {
  max-width: 960px;
}
</style>
