<template>
  <div class="container-fluid sticky-top animate animate__rubberBand">
  <nav class="navbar navbar-expand-md navbar-light bg-light menu menu-1  sticky-top" id="navbar-example">
    <div class="container">
      <img src="@/assets/images/image001.jpg" class="img-fluid navbar-brand" alt="">
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
          </li> <li class="nav-item">
            <a class="nav-link" href="#resume">RESUME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">PORTFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">CONTACT</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>

</script>

<style scoped>
.img-fluid{
    width: 100px;
}
a {
	font-size: 1rem;
	position: relative;
	text-transform: uppercase;
	transition: all 300ms ease;
	width: fit-content;
	cursor: pointer;
}
a:hover {
	transform: skew(10deg);
}
a::before {
	content: attr(data-name);
	position: absolute;
	top: 0;
	left: -20px;
	height: 3rem;
	overflow: hidden;
	transition: all 300ms ease;
	padding-left: 20px;
}
a:hover::before {
	top: -3px;
	left: 0px;
	color: rgb(32, 55, 191);
}

a::after {
	content: "";
	height: 4px;
  
	width: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgb(55, 3, 243);
	transition: all 300ms ease;
}
a:hover::after {
	width: 100%;
	outline: 1px solid rgb(2, 0, 36);
  margin-bottom: 100px;
}
.container-fluid{
  padding: 0;
}

</style>