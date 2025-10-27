<template>
  <div class="container py-4">
    <h2>Search Weather by City</h2>
    <input v-model="city" placeholder="Enter city (e.g. Clayton, AU)" class="form-control mb-3" />
    <button class="btn btn-primary" :disabled="loading" @click="fetchWeather">
      <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
      Get Weather
    </button>
    <p class="text-danger mt-3" v-if="errorMsg">{{ errorMsg }}</p>
    <div v-if="weather" class="mt-3">
      <h4>{{ weather.name }}</h4>
      <p>{{ weather.temp }} °C</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const city = ref('')
const weather = ref(null)
const loading = ref(false)
const errorMsg = ref('')

const fetchWeather = async () => {
  errorMsg.value = ''
  weather.value = null
  if (!city.value.trim()) {
    errorMsg.value = 'Please input a city, e.g. "Clayton, AU".'
    return
  }
  loading.value = true
  try {
    // Geocoding via Open-Meteo
    const raw = city.value.trim()
    const [namePart, countryPart] = raw.split(',').map(s => s?.trim()).filter(Boolean)
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(namePart)}&count=1&language=en&format=json${countryPart ? `&country_code=${encodeURIComponent(countryPart)}` : ''}`
    const geoRes = await axios.get(geoUrl)
    const geo = geoRes.data?.results?.[0]
    if (!geo) {
      throw new Error('Location not found')
    }
    const lat = geo.latitude
    const lon = geo.longitude
    const wxUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    const wxRes = await axios.get(wxUrl)
    const current = wxRes.data?.current_weather
    if (!current) throw new Error('No current weather data')
    weather.value = {
      name: `${geo.name}${geo.country_code ? `, ${geo.country_code}` : ''}`,
      temp: current.temperature
    }
  } catch (e) {
    errorMsg.value = (e?.response?.data?.message) ? `Error: ${e.response.data.message}` : String(e)
  } finally {
    loading.value = false
  }
}
</script>
