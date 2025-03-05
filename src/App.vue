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
#main-content__ {
  margin-top: 60px !important;
}

</style>
