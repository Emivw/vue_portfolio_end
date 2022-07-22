<template>
  <section class="container" id="portfolio">
    <div class="section-title">
      <h2>portfolio</h2>
    </div>
    <div class="row">
      <div class="col-xl-4 col-xm-12 col-sm-6 col-md-6" v-for="project in projects" :key="project">
        <div class="card">
        <img :src="project.image" class="img-fluid rounded-circle" style="aspect-ratio: 1;" alt="">
          <div class="card-body">
            <div class="card-content">
              <h2 class="card-title">{{ project.projectName }}</h2>
              <a class="" :href="project.link" target="_blank">Live Demo &rightarrow;</a>
              <a class="btn-grad floating" :href="project.github" target="_blank">
                <i class="bi bi-github" aria-hidden="true"></i>&rightarrow;
              </a>
              <p class="card-text">
                {{ project.aboutProject }}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style scoped>
#portfolio {
  height: max-content;
}
.card {
  background-color: #b4bec9;
  background-image: url("https://unsplash.it/500/700");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  margin: 1rem;
  border-radius: 15px;
  max-width: 350px;
}

.card-body {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  position: absolute;
  height: 30px;
  transition: 1s;
}

.card-body::before {
  content: " See more...";
  display: flex;
  align-items: center;
  position: absolute;
  width: 30%;
  height: 30px;
  padding: 0 0 0 8px;
  transition: 1s;
  border-radius: 0 0 15px 0;
  background-color: #0563bb;
}

.card:hover .card-body {
  height: 70%;
}
.card-content {
  padding: 2rem;
}

.card:hover .card-body::before {
  width: 80%;
}

button {
  background: #b4bec9;
  color: #002333;
  border: 0px;
  border-radius: 6px;
  padding: 0.5rem 1rem;
}

h2 {
  text-decoration: underline #159a9c 20%;
}
</style>
