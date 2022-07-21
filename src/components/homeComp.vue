<template>
  <div class="content">
    <div class="banner">
      <div class="title">EMILE VAN WYK</div>
      <div class="subtitle">Aspiring Full-Stacks Developer</div>
      <div class="hint">
        <div class="inner-arrow">
          <div class="hint-text">SCROLL</div>
          <i class="fas fa-mouse"></i>
        </div>
      </div>
    </div>

    <div class="quote">
      <div class="front-bracket"></div>
      <div class="sentence">Welcome to you.</div>
      <div class="sentence">Blessings of the moons upon you, traveller.</div>
      <div class="end-bracket"></div>
    </div>

    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content,
.banner,
.hint,
.inner-arrow,
.quote {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
@keyframes float {
  from {
    margin-bottom: 2rem;
  }
  to {
    margin-bottom: 1rem;
  }
}
@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #808080,
      0 0 40px #808080, 0 0 50px #808080, 0 0 60px #000, 0 0 70px #000;
  }
  to {
    text-shadow: 0 0 20px #000, 0 0 30px #000, 0 0 40px #fff, 0 0 50px #fff,
      0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff;
  }
}
.content {
  width: 100%;
  font-family: "Palatino Linotype";
  color: white;
  background-color: black;
}
.banner {
  width: 100%;
  height: 100vh;
  background-image: url("https://wallpaperplay.com/walls/full/b/e/8/298315.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.title {
  font-size: 15vmin;
  animation: glow 1s ease-in-out infinite alternate;
  margin-bottom: 1rem;
}
.subtitle {
  min-width: 40%;
  text-align: center;
  font-size: 5vmin;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  box-shadow: 0px 0px 25px 10px black;
  padding: 0 2rem;
}
.hint {
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transform: rotate(-45deg);
  animation: float 1s ease-in-out infinite alternate;
}
.inner-arrow {
  position: relative;
  width: 4rem;
  height: 4rem;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}
.inner-arrow .hint-text {
  font-size: 0.9rem;
  transform: rotate(45deg);
}
.inner-arrow i {
  font-size: 3rem;
  color: rgba(128, 128, 128, 0.8);
  position: absolute;
  top: -1.5rem;
  right: -1rem;
  transform: rotate(45deg);
}
.quote {
  position: relative;
  width: 100%;
  height: 30vmin;
  color: grey;
  background-color: black;
}
.sentence {
  font-size: 5vmin;
  font-style: italic;
  margin: 1vmin;
}
.front-bracket,
.end-bracket {
  position: absolute;
  left: 0;
  top: 0;
  margin: 2vmin;
  width: 10vmin;
  height: 10vmin;
  border-left: 2px solid white;
  border-top: 2px solid white;
}
.end-bracket {
  transform: rotate(180deg);
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
}


</style>
