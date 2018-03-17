<template>
  <!-- Start Contact Information -->
  <section id="contact-information">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 text-center leftReveal">
          <span class="dark-icon mb5 pe-7s-home"></span>
          <h5 class="no-margin-bottom spaced">12 Street, New York, NY</h5>
        </div><!-- /.column -->

        <div class="col-sm-4 mt30-xs text-center bottomReveal">
          <span class="dark-icon mb5 pe-7s-phone"></span>
          <h5 class="no-margin-bottom spaced">+1 213 726 4431</h5>
        </div><!-- /.column -->

        <div class="col-sm-4 mt30-xs text-center topReveal">
          <span class="dark-icon mb5 pe-7s-plug"></span>
          <h5 class="no-margin-bottom spaced">info@rolla.com</h5>
        </div><!-- /.column -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
  <!-- End Contact Information -->
</template>

<script>
export default {
  name: 'contacts-item'
}
</script>

<style scoped>
  /* =Contact
  -------------------------------------------------------------- */
  #map {
    height: 400px;
  }

  .form-control {
    height: 40px;
    font-size: 16px;
    line-height: 1.7;
    border: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .form-control:focus {
    color: #8e8e8e;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  #contact .has-error .form-control {
    border-color: #2F2F2F;
  }

  #contact .has-error .checkbox, .has-error .checkbox-inline, .has-error .control-label, .has-error .help-block, .has-error .radio, .has-error .radio-inline, .has-error.checkbox label, .has-error.checkbox-inline label, .has-error.radio label, .has-error.radio-inline label {
    color: #bfbfbf;
    font-size: 12px;
    font-weight: 400;
  }

  #contact .has-error .form-control:focus {
    border-color: #2F2F2F;
  }

  #msgSubmit {
    font-family: 'Roboto', sans-serif;
    text-transform: initial;
    font-weight: 300;
    margin-bottom: 20px;
  }

</style>
