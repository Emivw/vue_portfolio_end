<template>
  <section class="page-section" id="resume">
    <div class="container">
      <div class="section-title">
        <h2>resume</h2>
        <p></p>
      </div>
      <ul class="timeline">
        <li class="timeline-inverted">
          <div class="timeline-image bg-white">
            <img
              src="https://lcstudio.co.za/wp-content/uploads/logo.png"
              class="img-fluid p-2 mt-4 "
              alt=""
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2022 - present</h4>
              <h4 class="subheading">
                LC STUDIO - FULLSTACK DEVELOPMENT INTERN
              </h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Worked and collaborated on multiple projects using HTML, CSS,
                BOOTSTRAP, VUE.js, NODE.js, MYSQL, JavaScript and VUETIFY to
                create and host functional websites via FIREBASE showing off
                features such as login system, booking system, cart system, todo
                app systems and converters.
              </p>
            </div>
          </div>
          <div class="timeline-panel floating">
            <div class="timeline-heading"></div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              src="@/assets/images/unnamed2.jpg"
              class="rounded-circle img-fluid"
              style="width: 200px"
              alt=""
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2020 - 2021</h4>
              <h4 class="subheading">
                QuickEasy Software - SQL Development Intern
              </h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Tasks included Importing / capturing data, maintained demo
                databases front end and backend running upgrade scripts and
                testing information fidelity, as well as bug testing following
                S.O.P., Designing of templates using template tools following
                S.O.P, Formulated reports in FirebirdSQL to Specifications of
                clients and company. Attended training sessions with development
                seniors on procedures and operations of company. Produced videos
                for company page through Camtasia.
              </p>
            </div>
          </div>
        </li>

        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              src="https://quickeasysoftware.com/wp-content/uploads/bb-plugin/cache/Copy-of-1-2-e1599824522610-150x150-circle-150x150-circle.png"
              class="rounded-circle img-fluid mt-1"
              alt=""
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2019 - 2020</h4>
              <h4 class="subheading">Savvy Business - Assistant</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Tasks included answering incoming calls and emails from clients
                in a helpdesk environment, providing remote support, log client
                queries and escalate where required. Attend meetings with
                clients onsite, creation of training documents and videos,
                designing and maintaining client google sites to house
                documentation for internal use. Provided onsite support for
                client to ensure smooth transition, providing training and
                documentation of S.O.P, as well as first line support and
                escalated queries where required.
              </p>
            </div>
          </div>
          <div class="timeline-panel floating">
            <div class="timeline-heading"></div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              src="https://lifechoicesacademy.com/wp-content/uploads/2019/11/Life-Choices-Academy-Logo-G.png"
              class="img-fluid mt-4 py-3"
              alt=""
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2022 - Present</h4>
              <h4 class="subheading">Life Choices Academy - Student</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                full-stacks-developement course: HTML5, CSS3, Bootstrap, MySQL,
                VUE.JS, NODE.JS
              </p>
            </div>
          </div>
          <div class="timeline-panel floating">
            <div class="timeline-heading"></div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              src="https://ged.com/wp-content/uploads/2018/03/ged-logo.svg"
              class="img-fluid rounded-4 mt-4"
              style="width: 140px"
              alt=""
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2018</h4>
              <h4 class="subheading">
                GED Testing Service - General Education Development Certificate
              </h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">Matric Equivalent Certificate</p>
            </div>
          </div>
          <div class="timeline-panel floating">
            <div class="timeline-heading"></div>
          </div>
        </li>

        <li class="timeline-inverted">
          <div class="timeline-image">
            <a
              style="text-decoration: none"
              href="https://drive.google.com/file/d/1s6n2gbMQGMKqi6cXCGmOMBkOq-JVnkHh/view?usp=sharing"
              target="_blank"
            >
              <h4>
                view
                <br />
                my
                <br />
                CV
              </h4></a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.page-section {
  /* background: #000; */
  color: rgb(32, 55, 191);
  z-index: 2;
}
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after,
.timeline > li:before {
  display: table;
  content: " ";
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  position: absolute;
  z-index: 100;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #000000;
}
.timeline > li .timeline-image h4,
.timeline > li .timeline-image .h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline-heading h4,
.timeline .timeline-heading .h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-heading h4.subheading,
.timeline .timeline-heading .subheading.h4 {
  text-transform: none;
}
.timeline .timeline-body > ul,
.timeline .timeline-body > p {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
@media (min-width: 992px) {
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}
@media (min-width: 1200px) {
  .timeline > li {
    min-height: 170px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px 100px;
  }
  .timeline > li .timeline-image {
    width: 170px;
    height: 170px;
    margin-left: -85px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    margin-top: 40px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 100px 20px 20px;
  }
}

.page-section {
  padding: 6rem 0;
}
.page-section h2.section-heading,
.page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h3.section-subheading,
.page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding: 9rem 0;
  }
}

.text-center {
  text-align: center !important;
}

.page-section h2.section-heading,
.page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
.text-uppercase {
  text-transform: uppercase !important;
}

.page-section h3.section-subheading,
.page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

.text-muted {
  --bs-text-opacity: 1;
  color: white !important;
}

p {
  line-height: 1.75;
}
</style>
