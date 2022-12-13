<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Area</h4>
                <span>Wynberg, CPT, Western Cape, RSA</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Mobile / Whatsapp</h4>
                <span>081 355 7960</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Email Contact</h4>
                <span>emiya.vanwyk@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="index.html"
                  ><img
                    src="@/assets/images/image001.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-social-icon">
              <span>Socials</span>
              <ul
                class="d-flex flex-row justify-content-center"
                style="list-style: none;"
              >
                <li>
                  <a href="https://github.com/Emivw/" class="nav-link github" target="_blank"
                    ><i class="bi bi-github"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/blackbird2564/"
                    class="nav-link facebook" target="_blank"
                    ><i class="bi bi-facebook"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/just_emi_vw/"
                    class="nav-link instagram" target="_blank"
                    ><i class="bi bi-instagram"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/emile-van-wyk-561097209/"
                    class="nav-link linkedin" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50"></div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
              <p>
                Copyright &copy; {{ new Date().getFullYear() }}, All Right Reserved
                <a href="#">EMILE VAN WYK</a>
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div class="footer-menu">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style>
*{
  font-family: Bebas Neue;
}
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: #000000;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #ffffff;
}
.single-cta i {
  color: #0563bb;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: "Bebas Neue";
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: rgb(32, 55, 191)s;
}
.twitter-bg {
  background: rgb(32, 55, 191);
}
.google-bg {
  background: rgb(32, 55, 191);
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: rgb(32, 55, 191);
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: rgb(32, 55, 191);
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: rgb(32, 55, 191);
  padding: 13px 20px;
  border: 1px solid rgb(32, 55, 191);
  top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a {
  color: rgb(32, 55, 191);
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: rgb(32, 55, 191);
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style>
