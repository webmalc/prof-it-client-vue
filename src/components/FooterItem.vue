<template>
  <!-- Start Footer -->
  <footer class="page-footer">
    <div class="container">
      <!-- Contact Information -->
      <div class="row">
        <div class="col-md-12 text-center">
          &copy; 2016 <a href="#">Rolla</a>. All Rights Reserved.
        </div><!-- /.column -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  name: 'footer-item'
}
</script>

<style scoped>
  /* =Footer
  -------------------------------------------------------------- */
  .page-footer {
    padding: 20px 0;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  #contact-information {
    background-color: #ebebeb;
    padding: 100px 0;
  }

  #contact-information h5 {
    color: #686868;
    font-size: 14px;
  }
</style>
