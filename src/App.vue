<script setup>
import NodeBackground from '@/components/NodeBackground.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NodeBackground/>

  <NavBar class="centered"/>
  <div id="main-content">
    <router-view class="router-view"/>
  </div>
</template>

<style scoped>
#main-content {
  margin-top: 60px !important;
}

.centered {
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
