<script setup>
import cowboyHat from '../assets/images/cowboyhat.png'
import cowboyBoots from '../assets/images/cowboyboots.png'

const storeItems = [
  {id: 1, img: cowboyHat, title: 'Cowboy Hat', price: '500nok'},
  {id: 2, img: cowboyBoots, title: 'Cowboy Boots', price: '300nok'},
]

function handleClick(item) {
  alert(`You just purchased ${item.title} for ${item.price}\n`)
}
</script>

<template>
  <div class="store-grid">
    <div
      v-for="item in storeItems"
      :key="item.id"
      class="store-item"
      @click="handleClick(item)"
    >
      <img :src="item.img" alt="Cowboyhat" class="store-img"/>
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.store-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

.store-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
}

.store-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>