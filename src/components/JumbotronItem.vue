<template>
  <!-- Begin Jumbotron -->
  <div id="home" class="jumbotron">
    <div class="container">
      <div class="row">
        <!-- Content -->
        <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <div class="top-content bottomReveal">
            <h2>I am a minimal portfolio</h2>
            <span class="divider"></span>
            <p>Con panna organic americano grinder single origin white mug chicory arabica breve cortado. In sit, aromatic lungo shop body redeye. Galão dripper mocha doppio seasonal aroma barista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris felis.</p>
            <p class="no-margin">
              <a class="btn btn-primary btn-lg scroll-link" data-id="about" href="#about" role="button">About Us</a>
            </p>
          </div>
        </div><!-- /.column -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div>
  <!-- End Jumbotron -->
</template>

<script>
export default {
  name: 'jumbotron-item'
}
</script>

<style scoped>

  /* =Jumbotron
  -------------------------------------------------------------- */
  .jumbotron {
    padding-top: 120px;
    padding-bottom: 150px;
    margin-bottom: 0;
    background-color: #fff;
  }

  .jumbotron p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .top-content {
    padding-left: 30px;
    border-left: 2px solid #e8e8e8;
  }

  .jumbotron-down-arrow {
    font-size: 24px;
  }

</style>
