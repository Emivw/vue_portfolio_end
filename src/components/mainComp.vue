<template>
<testCarousel/>
       <expComp/>
       <projectCard/>
       <ContactComp/>
</template>
<script>
import testCarousel from "@/components/testCarousel.vue";
import projectCard from "@/components/projectCard.vue";
import expComp from "@/components/expComp.vue";
import ContactComp from "@/components/contactComp.vue";

    export default {
  components: { testCarousel, expComp, projectCard, ContactComp},
}
</script>
    
<style scoped>
    projectCard {height: max-content;}
</style>