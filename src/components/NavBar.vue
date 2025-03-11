<script setup>
import { ref } from 'vue';

// Variable para controlar el estado (abierto/cerrado) del menú en móvil
const isNavOpen = ref(false);

// Función para alternar el estado
function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<template>
  <!-- Encabezado con menú de navegación -->
  <header class="header">
    <!-- Logo -->
    <div class="logo-container">
      <router-link to="/" class="logo-link">
        <img
            alt="Genomatech logo"
            class="logo"
            src="../assets/img/genT-L.svg"
            width="200"
            height="auto"
        />
      </router-link>
    </div>

    <!-- Botón "hamburguesa" para móvil -->
    <button class="mobile-menu-btn" @click="toggleNav">
      ☰
    </button>

    <!-- Menú de navegación -->
    <!-- Usamos una clase condicional para mostrar/ocultar en móvil -->
    <nav class="nav-menu" :class="{ 'nav-menu--open': isNavOpen }">
      <router-link to="/"  @click="toggleNav">Inicio</router-link>
      <router-link to="/quienes-somos"  @click="toggleNav">Quiénes Somos</router-link>
      <!-- <router-link to="/servicios">Servicios</router-link> -->
      <!-- <a href="https://blog.genomatech.es/" target="_blank" rel="noopener noreferrer">Blog</a> -->
      <router-link to="/formulario"  @click="toggleNav">Formulario</router-link>
      <router-link to="/contacto"  @click="toggleNav">Contacto</router-link>
    </nav>
  </header>
</template>

<style scoped>
/* ------ Estilos generales ------ */
header {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  column-gap: 35dvw;
  align-items: center;
  flex-direction: row;
  background-color: #181818;
  padding: 13px 0px 7px 0px;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
}

.logo-link {
  display: inline-block;
}

.logo-link:hover {
  background-color: unset !important;
}

.logo-link img {
  display: block;
}

.logo-container {
  margin-left: 24px;
  display: flex;
}

.logo {
  height: 45px;
  display: block;
  margin: 0 auto 2rem;
}

.nav-menu {
  display: flex;
  column-gap: 20px;
}

/* Estilos de los links */
a {
  text-decoration: none;
  color: var(--color-primary);
  font-size: large;
  border-radius: 10px;
  padding: 0px 10px;
  font-weight: bold;
}

a:hover {
  color: white;
  background-color: var(--color-secondary);
}

/* ------ Botón hamburguesa ------ */
.mobile-menu-btn {
  display: none; /* Oculto por defecto, se mostrará solo en móvil */
  font-size: 2rem;
  background: transparent;
  color: var(--color-primary);
  border: none;
  cursor: pointer;
}

/* ------ Media Queries ------ */
/* Para pantallas grandes (desktop) */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

/* Para pantallas pequeñas (móvil/tablet) */
@media (max-width: 1023px) {
  /* Mostramos el botón hamburguesa */
  .mobile-menu-btn {
    display: block;
    padding-right: 15px;
  }

  /* Por defecto, el menú de navegación no se muestra en móvil */
  .nav-menu {
    position: absolute;
    top: 65px; /* Ajusta según la altura de tu header */
    right: 0;
    flex-direction: column;
    background-color: #181818;
    border-radius: 0 0 10px 10px;
    padding: 10px;
    display: none; /* oculto por defecto */
    z-index: 2;
  }

  /* Cuando la clase nav-menu--open está presente, mostramos el menú */
  .nav-menu.nav-menu--open {
    display: flex;
  }

  /* Ajusta los links dentro del menú para que se vean en bloque/columna */
  .nav-menu a {
    margin-bottom: 10px;
  }

  .logo {
    margin: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    column-gap: 0dvw;
    align-items: center;
    flex-direction: row;
  }
}
</style>
