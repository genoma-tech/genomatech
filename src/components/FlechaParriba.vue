<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const showButton = ref(false)

function handleScroll() {
  if (window.scrollY > 300) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}

// Función para hacer scroll hasta arriba
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
      v-show="showButton"
      class="flecha-parriba"
      @click="scrollToTop"
  >
    <img src="../assets/img/flechaArriba.svg" alt="Ir arriba"/>
  </button>
</template>

<style scoped>
.flecha-parriba {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: rgba(128, 128, 128, 0.5); /* color de fondo del botón */
  color: #fff; /* color del ícono o flecha */
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  z-index: 9999; /* para que se muestre por encima de otros elementos */
  padding: 13px 15px 15px 15px;
}

.flecha-parriba img {
  width: 100%;
  height: 100%;
  opacity: 0.75;
}

/* Si quieres una animación al mostrarse/ocultarse:
   puedes usar una transición de opacity o bien usar
   v-if en lugar de v-show para animar con <transition>. */
</style>
