<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>About</h2>
        <p>
          Hi there, my name is Emile I'm an aspiring website designer from Cape
          Town, with a focus in UI/UX design and Web/App Development. I love to
          get new experiences and always learn from my surroundings. I'm still a
          student trying to build a name for myself. I look forward to any
          opportunities and challenges.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="avatar floating">
            <div class="back-card"></div>
            <div class="front-card"></div>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Aspiring Web Developer</h3>
          <hr class="my-2" />
          <p></p>
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>
                  <i class="bi bi-calendar-date-fill"></i
                  ><strong> Birthday:</strong> 5 October 2000
                </li>
                <li>
                  <i class="bi bi-envelope-fill"></i
                  ><strong> Email:</strong> emiya.vanwyk@gmail.com
                </li>
                <li>
                  <i class="bi bi-phone-fill"></i><strong> Phone:</strong> +27
                  81 355 7960
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>
                  <i class="bi bi-archive-fill"></i><strong> Age:</strong> 21
                </li>
                <li>
                  <i class="bi bi-envelope-fill"></i
                  ><strong> Language:</strong> English/Afrikaans
                </li>
                <li>
                  <i class="bi bi-map-fill"></i><strong> City:</strong> Kenwyn,
                  CPT, RSA
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-6">
              <h3>Hard Skills</h3>
              <hr class="my-2" />
              <SkillsComp />
            </div>
            <div class="col-md-6">
              <h3>Soft Skills</h3>
              <hr class="my-2" />
              <SoftSkillsComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script>
import SkillsComp from "./skillsComp.vue";
import SoftSkillsComp from "./softSkillsComp.vue";

export default {
  components: { SkillsComp, SoftSkillsComp },
};
</script>

<style scoped>
/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
h3{
        color: #0563bb;
}
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #728394;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #0563bb;
  line-height: 0;
}

.about .content p:last-child {
  margin-bottom: 0;
}
/*--------------------------------------------------------------
# avatar cards
--------------------------------------------------------------*/
.avatar {
  position: relative;
  width: 70vmin;
  height: 65vmin;
  margin: 3vmin 8vmin 3vmin 1vmin;
  flex-shrink: 0;
}
.avatar:hover .front-card {
  transform: rotate(20deg);
}
.avatar:hover .back-card {
  transform: rotate(-15deg);
}
.front-card,
.back-card {
  position: absolute;
  right: 20%;
  top: 10%;
  width: 50%;
  height: 80%;
  background-image: url("https://i.ibb.co/Gnxd309/removal-ai-tmp-62d66b9a02b32-34-OGDE-1.png");
  background-size: cover;
  background-position: center;
  transform: rotate(5deg);
  transform-origin: left bottom;
  border-radius: 1rem;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease-out;
}
.back-card {
  left: 20%;
  right: auto;
  background-image: url("https://images.unsplash.com/photo-1542351567-cd7b06dc08d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
  background-position: 35% center;
  transform: rotate(-5deg);
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.8);
}
@media screen and (max-width: 1200px) {
  .information {
    flex-direction: column;
  }
  .avatar {
    order: -1;
  }
}
/*--------------------------------------------------------------
# blob styles
--------------------------------------------------------------*/
</style>
