<template>
  <div class="wrapper bg-dark">
    <!-- Sidebar  -->
    <NavBar/>

    <!-- Page Content  -->
    <div id="content">
      <headerComp />
      <mainComp />
    </div>
  </div>
      
      <footerComp />
</template>
<script>

import headerComp from "@/components/headerComp.vue";
import mainComp from "@/components/mainComp.vue";
import footerComp from "@/components/footerComp.vue";
import NavBar from "./components/navBar.vue";
export default {
  components: { headerComp, footerComp, mainComp, NavBar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
     color: #6c757d !important;
}

:root{
  --background-color: #2c3e50;
  --text-color:
}
.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }
}

#content {
  width: 100%;
  font-family: "Palatino Linotype";
  color: white;
  background-color: black;
}
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #45505b;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #0563bb;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
}
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

/* #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
} */
.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
   color: #6c757d !important;
}

.site-heading h2 span {
  color: #a00000;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}

.site-heading {
  margin-bottom: 60px;
  overflow: hidden;
  margin-top: -5px;
}
         
         .btn-grad {
            background-image: linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
</style>
