<template>
  <div class="home-page">
    <h1>Home</h1>
    <h2>Fundamentos</h2>
    <p>homePage works!</p>

    <div class="counter-section">
      <h3>Contador: {{ count }}</h3>
      <div class="counter-buttons">
        <button @click="increment" class="btn">Incrementar</button>
        <button @click="decrement" class="btn">Restar</button>
        <button @click="reset" class="btn reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
.home-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.counter-section {
  margin: 30px 0;
}

.counter-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
}

.btn.reset {
  background-color: #ffc107;
  color: black;
}
</style>
