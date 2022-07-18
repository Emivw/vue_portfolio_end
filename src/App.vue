<template>
<headerComp/>
<mainComp/>
<footerComp/>
  <router-view/>
</template>
<script>
import headerComp from '@/components/headerComp.vue'
import mainComp from '@/components/mainComp.vue'
import footerComp from '@/components/footerComp.vue'
export default {
  components: {headerComp, footerComp, mainComp}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
