<script setup>
import {computed} from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const letters = computed(() => [...props.text]) // handles emojis
</script>

<template>
  <div class="bouncing-text-container">
    <h1>
      <span
        v-for="(letter, index) in letters"
        :key="index"
        :style="{ animationDelay: (index * 0.1) + 's' }"
        class="bounce-letter"
      >
        {{ letter }}
      </span>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-size: 7rem;
  color: saddlebrown;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.bounce-letter {
  display: inline-block;
  animation: bounce 2s infinite;
}
</style>