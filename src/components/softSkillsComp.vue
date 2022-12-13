<template>
  <div class="container content-section text-center" id="skills">
    <div class="row">
      <div class="col-lg-12 col-lg-offset-2">
        <div id="skill-bar-wrapper">

          <div class="text-left">
            <!-- C++ -->
            Adaptable<span style="float: right">95%</span>
            <div class="skillbar-container clearfix" data-percent="95%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- Fortran -->
            Resilience<span style="float: right">80%</span>
            <div class="skillbar-container clearfix" data-percent="80%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- Java -->
            Creativity<span style="float: right">65%</span>
            <div class="skillbar-container clearfix" data-percent="65%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- Cmake -->
            Attention To Detail<span style="float: right">75%</span>
            <div class="skillbar-container clearfix" data-percent="75%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- HTML -->
            Problem-solving<span style="float: right">85%</span>
            <div class="skillbar-container clearfix" data-percent="85%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- JavaScript -->
            Communication<span style="float: right">80%</span>
            <div class="skillbar-container clearfix" data-percent="80%">
              <div class="skills" style="background: white"></div>
            </div>

            <!-- jQuery -->
            Optimism<span style="float: right">78%</span>
            <div class="skillbar-container clearfix" data-percent="78%">
              <div class="skills" style="background: white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(window).scroll(function () {
  let hT = $("#skill-bar-wrapper").offset().top,
    hH = $("#skill-bar-wrapper").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - 1.4 * wH) {
    jQuery(document).ready(function () {
      jQuery(".skillbar-container").each(function () {
        jQuery(this)
          .find(".skills")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            5000
          ); // 5 seconds
      });
    });
  }
});
export default {};
</script>

<style scoped>
/* for skill bars ***************************** */
body {
  color: #fff;
  background-color: #000;
  font-size: 18px;
}

h1 {
  font-size: 35px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

p {
  margin: 0 0 25px;
  line-height: 1.5;
}

/* #skill-bar-wrapper {
    font-size: 18px;
} */

.skillbar-container {
  position: relative;
  display: block;
  margin-bottom: 15px;
  width: 100%;
  background-color: #666463;
  background-color: rgba(255, 255, 255, 0.1);
  height: 35px;
  height: 5px;
}

.skills {
  height: 35px;
  height: 5px;
  width: 0px;
}
</style>
