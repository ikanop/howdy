<script setup></script>

<template>
  <div class="background"></div>
</template>

<style scoped>
.background {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  transform: scale(1.05);
}

.background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("../assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(10px);
}
</style>