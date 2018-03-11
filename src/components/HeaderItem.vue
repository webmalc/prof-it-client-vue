<template>
  <!-- Begin Header -->
  <header>
    <!-- Begin Navigation -->
    <nav class="navbar navbar-default navbar-spacing-top-fixed">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand scroll-top" href="#">Rolla</a><span class="navbar-tagline hidden-sm">Multi</span>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false"><span>Home</span></a>
              <ul class="dropdown-menu dropdown-menu-first">
                <li><a href="multipage-top-default.html">Default</a></li>
                <li><a href="multipage-top-slider-image.html">Image Slider</a></li>
                <li><a href="multipage-top-text-rotater.html">Rotate</a></li>
                <li><a href="multipage-top-slider-transparent.html">No BG Slider</a></li>
              </ul><!-- /.dropdown items -->
            </li><!-- /.dropdown -->
            <li><a href="multipage-services.html">Services</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false"><span>Pages</span></a>
              <ul class="dropdown-menu dropdown-menu-first">
                <li><a href="multipage-about.html">About</a></li>
                <li><a href="multipage-pricing.html">Pricing</a></li>
                <li><a href="multipage-experience.html">Experience</a></li>
              </ul><!-- /.dropdown items -->
            </li><!-- /.dropdown -->
            <li><a href="multipage-team.html">Team</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false"><span>Work</span></a>
              <ul class="dropdown-menu dropdown-menu-first">
                <li class="dropdown-submenu">
                  <a tabindex="-1" href="#">Masonry &nbsp;<span class="ion-ios-arrow-right"></span></a>
                  <ul class="dropdown-menu">
                    <li><a tabindex="-1" href="multipage-portfolio-masonry-2col.html">2 Columns</a></li>
                    <li><a tabindex="-1" href="multipage-portfolio-masonry-3col.html">3 Columns</a></li>
                    <li><a tabindex="-1" href="multipage-portfolio-masonry-4col.html">4 Columns</a></li>
                  </ul><!-- /.dropdown sub items -->
                </li><!-- /.dropdown sub -->
                <li class="dropdown-submenu">
                  <a href="#">Regular &nbsp;<span class="ion-ios-arrow-right"></span></a>
                  <ul class="dropdown-menu">
                    <li><a tabindex="-1" href="multipage-portfolio-aligned-2col.html">2 Columns</a></li>
                    <li><a tabindex="-1" href="multipage-portfolio-aligned-3col.html">3 Columns</a></li>
                    <li><a tabindex="-1" href="multipage-portfolio-aligned-4col.html">4 Columns</a></li>
                  </ul><!-- /.dropdown sub items -->
                </li><!-- /.dropdown sub -->
              </ul><!-- /.dropdown sub holder -->
            </li><!-- /.dropdown -->
            <li><a href="multipage-contact.html">Contact</a></li>
            <li class="btn-navbar"><a href="#"><span class="btn btn-primary btn-lg">Buy Now</span></a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.nav -->
    <!-- End Navigation -->

  </header>
  <!-- End Header -->
</template>

<script>
export default {
  name: 'header-item'
}
</script>

<style scoped>
  /* =Navigation
-------------------------------------------------------------- */
  .navbar-default {
    background-color: #fff;
  }

  .navbar-default .navbar-brand {
    color: #373737;
    font-family: 'Montserrat';
    letter-spacing: -4.5px;
    text-transform: uppercase;
  }

  .navbar-default .navbar-nav > li > a {
    color: #adadad;
    line-height: 50px;
    font-size: 14px;
    text-transform: uppercase;
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
  }

  .navbar-brand {
    height: 80px;
    font-size: 36px;
    line-height: 50px;
  }

  .navbar-tagline {
    line-height: 80px;
  }

  .navbar {
    min-height: 80px;
    margin-bottom: 0;
    border: none;
  }

  .navbar-spacing-top-fixed {
    padding-top: 50px;
  }

  .navbar-spacing-top-static {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .navbar-switch {
    padding-top: 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-box-shadow: -1px 4px 18px -3px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: -1px 4px 18px -3px rgba(0, 0, 0, 0.07);
    box-shadow: -1px 4px 18px -3px rgba(0, 0, 0, 0.07);
  }

  .navbar-toggle {
    margin-top: 23px;
    margin-bottom: 23px;
    border-radius: 0;
  }

  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: #474747;
    border-color: #474747;
  }

  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {
    color: #555;
    background-color: #fff;
  }

  .btn-navbar a {
    line-height: 45px;
  }

  .dropdown-menu > li > a {
    display: block;
    padding: 12px 16px 10px 16px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857;
    color: #FFF;
    font-size: 11px;
    text-transform: uppercase;
    border-bottom: 1px solid #474747;
    font-weight: 300;
  }

  .dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {
    color: rgba(255, 255, 255, 0.70);
    text-decoration: none;
    background-color: transparent;
  }

  .dropdown-menu {
    background-color: #3C3C3C;
    border: 1px solid rgba(66, 67, 66, 1);
    border-radius: 0;
    min-width: 150px;
    box-shadow: none;
    padding: 0;
  }

  .dropdown-menu-first:before {
    position: absolute;
    top: -7px;
    right: 14px;
    display: inline-block;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #3c3c3c;
    border-left: 7px solid transparent;
    border-bottom-color: #3c3c3c;
    content: '';
  }

  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-left: -1px;
    margin-top: -1px;
  }

  .dropdown-submenu:hover > .dropdown-menu {
    display: block;
  }

  .dropdown-submenu:hover > a:after {
    border-left-color: #fff;
  }

  .dropdown-submenu.pull-left {
    float: none;
  }

  .dropdown-submenu.pull-left > .dropdown-menu {
    left: -100%;
    margin-left: 10px;
  }

  .dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {
    background-color: #4a4a4a;
  }

  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
    color: #555;
    background-color: #fff;
  }
</style>
