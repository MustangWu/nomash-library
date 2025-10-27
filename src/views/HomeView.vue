<template>
  <div class="container py-4">
    <h1 class="mb-4">🗄️ Library Registration Form</h1>
    <p class="text-center mb-4">
      This form now includes validation with confirm password feature. 
      Registered users are displayed in a data table below (PrimeVue).
    </p>

    <form @submit.prevent="submitForm">
      <div class="row g-3">
        <!-- Username -->
        <div class="col-md-6 col-sm-6">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            type="text"
            class="form-control"
            v-model="formData.username"
            @blur="() => validateName(true)"
            @input="() => validateName(false)"
          />
          <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
        </div>

        <!-- Password -->
        <div class="col-md-6 col-sm-6">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            class="form-control"
            v-model="formData.password"
            @blur="() => validatePassword(true)"
            @input="() => validatePassword(false)"
          />
          <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
        </div>

        <!-- Confirm Password (only show mismatch on blur) -->
        <div class="col-md-6 col-sm-6">
          <label for="confirm-password" class="form-label">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            class="form-control"
            v-model="formData.confirmPassword"
            @blur="() => validateConfirmPassword(true)"
          />
          <div v-if="errors.confirmPassword" class="text-danger">
            {{ errors.confirmPassword }}
          </div>
        </div>

        <!-- Australian Resident -->
        <div class="col-md-6 col-sm-6">
          <div class="form-check mt-4">
            <input
              id="isAustralian"
              class="form-check-input"
              type="checkbox"
              v-model="formData.isAustralian"
            />
            <label for="isAustralian" class="form-check-label">
              I am an Australian resident
            </label>
          </div>
        </div>

        <!-- Gender -->
        <div class="col-md-6 col-sm-6">
          <label class="form-label">Gender</label>
          <select class="form-select" v-model="formData.gender">
            <option disabled value="">Please choose</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
          <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
        </div>

        <!-- Reason for joining (positive hint when 'friend' keyword detected) -->
        <div class="col-12">
          <label for="reason" class="form-label">Reason for joining</label>
          <textarea
            id="reason"
            class="form-control"
            rows="3"
            v-model="formData.reason"
            @input="validateReason"
          ></textarea>
          <div v-if="friendHint" class="text-success">Great to have a friend!</div>
          <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
        </div>

        <!-- Buttons -->
        <div class="col-12 d-flex gap-2">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
        </div>
      </div>
    </form>

    <!-- PrimeVue DataTable -->
    <div class="row mt-5" v-if="submittedCards.length">
      <h4>Registered Users</h4>
      <DataTable :value="submittedCards" tableStyle="min-width: 50rem">
        <Column field="username" header="Username"></Column>
        <Column field="password" header="Password"></Column>
        <Column field="isAustralian" header="Australian Resident"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="reason" header="Reason"></Column>
      </DataTable>
    </div>

    <!-- Bootstrap Cards -->
    <div class="row mt-5" v-if="submittedCards.length">
      <div class="d-flex flex-wrap justify-content-start">
        <div
          v-for="(card, index) in submittedCards"
          :key="index"
          class="card m-2"
          style="width: 18rem"
        >
          <div class="card-header">User Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">
              Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
            </li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: ''
})

const submittedCards = ref([])

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  resident: null,
  gender: null,
  reason: null
})

const friendHint = computed(() =>
  formData.value.reason.toLowerCase().includes('friend')
)

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

/**
 * Confirm password validation: only show mismatch on blur to avoid interruption
 */
const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateReason = () => {
  // Custom: optional minimum length constraint
  errors.value.reason =
    formData.value.reason.length >= 0 ? null : 'Please tell us a little more.'
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    reason: '',
    gender: ''
  }
  errors.value = {
    username: null,
    password: null,
    confirmPassword: null,
    resident: null,
    gender: null,
    reason: null
  }
}

const submitForm = () => {
  // Simple demo: run overall validation here
  validateConfirmPassword(true)
  validateName(true)
  validatePassword(true)
  if (!errors.value.username && !errors.value.confirmPassword && !errors.value.password) {
    submittedCards.value.push({ ...formData.value })
    alert('Registration successful!')
    clearForm()
  }
}
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}
</style>
