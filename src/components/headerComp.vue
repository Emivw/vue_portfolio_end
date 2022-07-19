<template>
  <div class="p-5 bg-light">
    <div class="site-heading text-center">
      <h2>I am <span>Emile Van Wyk</span></h2>
      <h4>Welcome to my Portfolio</h4>
    </div>
    <hr class="my-2" />
    <p>More info</p>
    <p class="lead">
      <a class="btn btn-grad btn-lg" href="Jumbo action link" role="button"
        >About me</a
      >
    </p>
  </div>
  <services />
</template>

<script>
import services from "@/components/services.vue";

export default {
  components: { services },
};
</script>

<style scoped></style>
