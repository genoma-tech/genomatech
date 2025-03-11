<script setup>
import NodeBackground from '@/components/NodeBackground.vue'
import NavBar from '@/components/NavBar.vue'
import FlechaParriba from "@/components/FlechaParriba.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NodeBackground/>

  <NavBar/>
  <div id="main-content">
    <router-view class="router-view"/>
  </div>

  <Footer/>
  <FlechaParriba/>
</template>

<style scoped>
#main-content {
  margin-top: 65px !important;
}

/* Para pantallas pequeñas (móvil/tablet) */
@media (max-width: 1023px) {
  #main-content {
    margin-top: 40px !important;
  }
}

</style>
