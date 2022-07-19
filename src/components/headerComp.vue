<template>
<home/>
  <services />
</template>

<script>
import services from "@/components/servicesComp.vue";
import home from "@/components/homeComp.vue";

export default {
  components: { services, home },
};
</script>

<style scoped></style>
