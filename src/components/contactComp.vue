<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <!--             project title area start -->
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <!--             project title area end -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
          <div class="form-area mt-5 p-lg-4 p-3">
            <!--               main form start -->
            <form action="https://formspree.io/f/xrgjyewq" method="POST">
              <div class="row">
                <div class="col-sm-12 text-center text-info mb-3 font-secondary">
                  <h3>Reach Out</h3>
                </div>
              </div>
              <dl class="row">
                <dt class="col-sm-4 text-info font-secondary">Name*</dt>
                <dd class="col-sm-8">
                  <input type="text" class="form-control" name="name" placeholder="Name" required />
                </dd>

                <dt class="col-sm-4 text-info font-secondary">Email*</dt>
                <dd class="col-sm-8">
                  <input
                    type="Email"
                    class="form-control text-info"
                    placeholder="Email" name="email"
                    required
                  />
                </dd>
                <dt class="col-sm-4 text-info font-secondary">Subject*</dt>
                <dd class="col-sm-8">
                  <input
                    type="subject"
                    class="form-control text-info"
                    placeholder="Subject" name="subject"
                    required
                  />
                </dd>
                <dt class="col-sm-4 text-info font-secondary">message*</dt>
                <dd class="col-sm-8">
                  <textarea
                    type="textarea"
                    class="form-control text-info"
                    placeholder="Message" name="message"
                    required
                  />
                </dd>
              </dl>
              <div class="row">
                <div class="col-sm-12">
                  <input type="submit" name="submit" class="form-control btn-grad" value="Submit" />
                </div>
              </div>
            </form>
            <!--               main form end -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
body {
  background: #222;
}
.form-control {
  border-radius: 0px;
  border: 0px;
}
.form-area {
  /* border: 1px solid #fff; */
}
</style>
