<template>
<div class="home-demo">
  <h3>Carousel</h3>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <h2>Swipe</h2>
    </div>
    <div class="item">
      <h2>Drag</h2>
    </div>
    <div class="item">
      <h2>Responsive</h2>
    </div>
    <div class="item">
      <h2>CSS3</h2>
    </div>
    <div class="item">
      <h2>Fast</h2>
    </div>
    <div class="item">
      <h2>Easy</h2>
    </div>
    <div class="item">
      <h2>Free</h2>
    </div>
    <div class="item">
      <h2>Upgradable</h2>
    </div>
    <div class="item">
      <h2>Tons of options</h2>
    </div>
    <div class="item">
      <h2>Infinity</h2>
    </div>
    <div class="item">
      <h2>Auto Width</h2>
    </div>
  </div>
</div>
</template>
    
<script>
    $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true
  });
});
</script>
    
<style scoped>
.home-demo .item {
    background: #ff3f4d;
}
.home-demo h2 {
    color: #FFF;
    text-align: center;
    padding: 5rem 0;
    margin: 0;
    font-style: italic;
    font-weight: 300;
}
</style>