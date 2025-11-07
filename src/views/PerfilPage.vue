<template>
  <div class="perfil-page">
    <h1>{{ name }}</h1>

    <dl>
      <dt>Nombre:</dt>
      <dd>{{ name }}</dd>

      <dt>Apellido:</dt>
      <dd>{{ lastName }}</dd>

      <dt>Edad:</dt>
      <dd>{{ age }}</dd>

      <dt>Nombre Completo:</dt>
      <dd>{{ fullName }}</dd>

      <dt>Nombre y Apellido (Mayúsculas):</dt>
      <dd>{{ nameUpperCase }}</dd>
    </dl>

    <div class="buttons">
      <button @click="changeData" class="btn">Cambiar datos</button>
      <button @click="changeAge" class="btn">Cambiar edad</button>
      <button @click="resetData" class="btn reset">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const name = ref('Leo')
const lastName = ref('Vasconez')
const age = ref(20)

const fullName = computed(() => {
  return `${name.value} ${lastName.value} con edad ${age.value} años`
})

const nameUpperCase = computed(() => {
  return `${name.value} ${lastName.value}`.toUpperCase()
})

const changeData = () => {
  name.value = 'Ana'
  lastName.value = 'Gonzales'
  age.value = 25
}

const changeAge = () => {
  age.value = 18
}

const resetData = () => {
  name.value = 'Leo'
  lastName.value = 'Vasconez'
  age.value = 20
}
</script>

<style scoped>
.perfil-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

dl {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  margin: 20px 0;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.btn.reset {
  background-color: #dc3545;
}

.btn:hover {
  opacity: 0.8;
}
</style>
