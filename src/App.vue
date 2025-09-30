<script setup>
import Background from './components/Background.vue'
import Header from './components/Header.vue'
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const headerText = computed(() => {
  if (route.path === '/') return 'HOWDY!🤠'
  if (route.path === '/store') return 'STORE'
  return ''
})
</script>

<template>
  <div>
    <Background/>
    <div class="grid-container">
      <!-- Header -->
      <div class="grid-item header-container">
        <Header :text="headerText"/>
      </div>

      <!-- Left sidebar -->
      <div class="grid-item sidebar">
        <router-link to="/">Main</router-link>
        <router-link to="/store">Store</router-link>
      </div>

      <!-- Main content -->
      <div class="grid-item modal-container">
        <div class="main">
          <router-view/>
        </div>
      </div>

      <div class="grid-item right-container">

      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.router-link-active {
  background-color: peru;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* 2 columns */
  grid-template-rows: 200px 1fr;
  height: 100vh;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.header-container {
  grid-column: 1/-1;
}

.modal-container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.main {
  height: 100%;
  width: 100%;
  justify-self: flex-start;
  align-items: flex-start;
}</style>