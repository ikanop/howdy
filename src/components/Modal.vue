<script setup>
import {ref} from 'vue'

const showModal = ref(false)
const name = ref('')
const email = ref('')

function handleSubmit() {
  alert(`Name: ${name.value}\nEmail: ${email.value}`)
  showModal.value = false
}
</script>

<template>
  <button @click="showModal = true">Saddle up!</button>

  <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
    <div class="modal-content">
      <span class="close" @click="showModal = false">&times;</span>
      <p>Howdy, partner, please fill in this field to sign up!</p>
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-group name">
          <label>Full name:</label>
          <input v-model="name" placeholder="Your name" type="text"/>
        </div>
        <div class="form-group email">
          <label>Email:</label>
          <input v-model="email" placeholder="you@example.com" type="email"/>
        </div>
        <div class="form-group submit">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  border: solid saddlebrown 6px;
  border-radius: 5px;
}

.close {
  line-height: 0;
  position: absolute;
  top: 6px;
  right: 0;
  cursor: pointer;
}

p {
  margin-bottom: 2rem;
}

form {
  gap: 1rem;
  width: 520px;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.form-group label {
  width: 120px;
}

.form-group input[type="text"],
.form-group input[type="email"] {
  all: unset;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.75rem;
  background-color: transparent;
  margin-left: auto;
  flex: 1;
}

.submit input {
  text-align: center;
  width: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: saddlebrown;
  color: white;
  cursor: pointer;
  outline: 2px solid black;
  margin-left: auto;
}

button {
  margin-top: 1rem;
}
</style>