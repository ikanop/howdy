<script setup>
import {ref} from 'vue'

const showModal = ref(false)
</script>

<template>
  <button @click="showModal = true">Saddle up!</button>

  <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
    <div class="modal-content">
      <span class="close" @click="showModal = false">&times;</span>
      <p>Howdy, partner, please fill in this field to sign up!</p>
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
  position: relative;
  border: solid saddlebrown 6px;
  border-radius: 5px;
  padding: 100px;
}

span {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>