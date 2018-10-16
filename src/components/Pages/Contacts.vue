<template>
  <section>
  <!-- Begin Map -->
  <div id="map"></div>
  <!-- End Map -->

  <!-- Begin Contact -->
  <section id="contact" class="section-padding section-border-top">
    <div class="container">
      <!-- Title -->
      <div class="row mb40">
        <div class="col-xs-12 text-center">
          <h2>Contact</h2>
          <span class="divider divider-center divider-dark no-margin-bottom"></span>
        </div><!-- /.column -->
      </div><!-- /.row -->

      <!-- Form -->
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form data-toggle="validator" id="contactForm" name="contactForm">
            <!-- Subject -->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="controls">
                    <input class="form-control" data-error="This section is required."
                           id="msg_subject" placeholder="Subject *" required="" type="text">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div><!-- /.column -->
            </div><!-- /.row -->

            <!-- Name -->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="controls">
                    <input class="form-control" data-error="This section is required." id="name" placeholder="Your Name *" required="" type="text">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div><!-- /.column -->
            </div><!-- /.row -->

            <!-- Email -->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="controls">
                    <input class="email form-control" data-error="This section is required." id="email" placeholder="Email *" required="" type="email">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div><!-- /.column -->
            </div><!-- /.row -->

            <!-- Message -->
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="controls">
                    <textarea class="form-control" data-error="This section is required." id="message" placeholder="Message *" required="" rows="5"></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Confirmed -->
            <div class="row">
              <div class="col-sm-12 text-center">
                <div id="msgSubmit" class="h4 hidden"></div>
              </div><!-- /.column -->
            </div>

            <!-- Button -->
            <div class="row">
              <div class="col-sm-12 text-center">
                <button type="submit" id="submit" class="btn btn-primary btn-lg">Send</button>
              </div><!-- /.column -->
            </div><!-- /.row -->
          </form><!-- /.form -->
        </div><!-- /.column -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
  <!-- End Contact -->
  </section>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>

</style>
