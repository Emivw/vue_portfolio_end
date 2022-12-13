<template>
  <section id="testimonials">
  <div class="section-title">
        <h2>Testimonials</h2>
      </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="customers-testimonials" class="owl-carousel" >
            <!--TESTIMONIAL 1 -->
            <div class="item " v-for="testimonial in testimonials"
            :key="testimonial">
              <div class="shadow-effect ">
                <img
                  class="img-circle"
                  :src="testimonial.image"
                  alt=""
                />
                <p class="text-white">
                <i class="fas fa-quote-left"></i>
                  {{testimonial.quote}} 
                  <i class="fas fa-quote-right"></i>
                </p>
              </div>
              <div class="testimonial-name btn-grad floating">{{testimonial.name}} - {{testimonial.level}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Owl Carousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
};
</script>

<style scoped>
.shadow-effect {
  background: rgb(61, 61, 61);
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ececec;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
  min-height: 550px;
}
#customers-testimonials .shadow-effect p {
  font-family: inherit;
  font-size: 17px;
  line-height: 1.5;
  margin: 0 0 17px 0;
  font-weight: 300;
}
.testimonial-name {
  margin: -17px auto 0;
  display: table;
  width: auto;
  padding: 9px 35px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 5px 7px rgba(0, 0, 0, 0.05);
}
#customers-testimonials .item {
  text-align: center;
  padding: 50px;
  margin-bottom: 80px;
  opacity: 0.2;
  -webkit-transform: scale3d(0.8, 0.8, 1);
  transform: scale3d(0.8, 0.8, 1);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

}
#customers-testimonials .owl-item.active.center .item {
  opacity: 1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
.owl-carousel .owl-item img {
  transform-style: preserve-3d;
  max-width: 90px;
  margin: 0 auto 17px;
  border-radius: 50%;
  aspect-ratio: 1;
}
#customers-testimonials.owl-carousel .owl-dots .owl-dot.active span,
#customers-testimonials.owl-carousel .owl-dots .owl-dot:hover span {
  background: rgb(32, 55, 191);
  transform: translate3d(0px, -50%, 0px) scale(0.7);
}
#customers-testimonials.owl-carousel .owl-dots {
  display: inline-block;
  width: 100%;
  text-align: center;
}
#customers-testimonials.owl-carousel .owl-dots .owl-dot {
  display: inline-block;
}
#customers-testimonials.owl-carousel .owl-dots .owl-dot span {
  background: rgb(32, 55, 191);
  display: inline-block;
  height: 20px;
  margin: 0 2px 5px;
  transform: translate3d(0px, -50%, 0px) scale(0.3);
  transform-origin: 50% 50% 0;
  transition: all 250ms ease-out 0s;
  width: 20px;
}
</style>
