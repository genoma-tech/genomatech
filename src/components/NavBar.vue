<script setup>

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
    <!-- Menú de navegación -->
    <nav class="nav-menu">
      <router-link to="/">Inicio</router-link>
      <router-link to="/quienes-somos">Quiénes Somos</router-link>
<!--      <router-link to="/servicios">Servicios</router-link>-->
<!--      <a href="https://blog.genomatech.es/" target="_blank" rel="noopener noreferrer">Blog</a>-->
      <router-link to="/formulario">Formulario</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<style scoped>
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

a {
  text-decoration: none;
  color: var(--color-primary);
  font-size: large;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  font-weight: bold;
}

a:hover {
  color: white;
  background-color: var(--color-secondary);
}

/* Estilos por size */

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
</style>