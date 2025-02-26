<script setup>
import NodeBackground from '@/components/NodeBackground.vue'
import NavBar from '@/components/NavBar.vue'
import FlechaParriba from "@/components/FlechaParriba.vue";
</script>

<template>
  <NodeBackground/>

  <NavBar/>
  <div id="main-content">
    <router-view class="router-view"/>
  </div>

  <FlechaParriba/>
</template>

<style scoped>
#main-content__ {
  margin-top: 60px !important;
}

</style>
