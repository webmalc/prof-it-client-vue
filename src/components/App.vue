<template><div id="app">
    <!-- Begin Header -->
    <header>

      <!-- Begin Navigation -->
      <nav class="navbar navbar-default navbar-spacing-top-fixed">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
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
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Home</span></a>
                <ul class="dropdown-menu dropdown-menu-first">
                  <li><a href="multipage-top-default.html">Default</a></li>
                  <li><a href="multipage-top-slider-image.html">Image Slider</a></li>
                  <li><a href="multipage-top-text-rotater.html">Rotate</a></li>
                  <li><a href="multipage-top-slider-transparent.html">No BG Slider</a></li>
                </ul><!-- /.dropdown items -->
              </li><!-- /.dropdown -->
              <li><a href="multipage-services.html">Services</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Pages</span></a>
                <ul class="dropdown-menu dropdown-menu-first">
                  <li><a href="multipage-about.html">About</a></li>
                  <li><a href="multipage-pricing.html">Pricing</a></li>
                  <li><a href="multipage-experience.html">Experience</a></li>
                </ul><!-- /.dropdown items -->
              </li><!-- /.dropdown -->
              <li><a href="multipage-team.html">Team</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>Work</span></a>
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

    <!-- Begin Work -->
    <section id="work" class="section-padding-work">
      <div class="container">
        <!-- Title -->
        <div class="row mb50">
          <div class="col-sm-12 col-md-6 col-md-offset-3 text-center filter-button-group">
            <h2>Portfolio</h2>
            <span class="divider divider-center divider-dark mb30"></span>
            <span>Filter :</span>
            <ul class="list-work-filter list-unstyled list-inline">
              <li class="active" data-filter="*">All</li>
              <li data-filter=".web">Web</li>
              <li data-filter=".print">Print</li>
              <li data-filter=".product">Product</li>
            </ul>
          </div><!-- /.column -->
        </div><!-- /.row -->

        <!-- Masonry Portfolio -->
        <div class="row grid">
          <!-- Item 1 -->
          <div class="col-md-4 product web">
            <a href="/static/tmp/images/work/1.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Right &amp; Sand</h4>
                    <span>Product</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/1.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 2 -->
          <div class="col-md-4 print product">
            <a href="/static/tmp/images/work/2.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Polly Fox</h4>
                    <span>Print</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/2.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 3 -->
          <div class="col-md-4 print product">
            <a href="/static/tmp/images/work/3.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Roots</h4>
                    <span>Print</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/3.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 4 -->
          <div class="col-md-4 print product">
            <a href="/static/tmp/images/work/4.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Magazine</h4>
                    <span>Print</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/4.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 5 -->
          <div class="col-md-4 web">
            <a href="/static/tmp/images/work/5.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Bottle</h4>
                    <span>Product</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/5.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 6 -->
          <div class="col-md-4 product web">
            <a href="/static/tmp/images/work/6.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Triangle</h4>
                    <span>Web</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/6.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 7 -->
          <div class="col-md-4 product web">
            <a href="/static/tmp/images/work/7.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Hermes</h4>
                    <span>Web</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/7.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 8 -->
          <div class="col-md-4 web">
            <a href="/static/tmp/images/work/8.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Reasons</h4>
                    <span>Web</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/8.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->

          <!-- Item 9 -->
          <div class="col-md-4 web">
            <a href="/static/tmp/images/work/9.jpg" class="zoom">
              <div class="grid-item">
                <div class="overlay">
                  <div class="inner-overlay">
                    <h4>Cards</h4>
                    <span>Print</span>
                  </div>
                </div>
                <img src="/static/tmp/images/work/9.jpg" class="img-responsive" alt="...">
              </div>
            </a>
          </div><!-- /.column -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
    <!-- End Work -->

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
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
import FooterItem from '@/components/FooterItem'
export default {
  name: 'App',
  components: {
    'header-item': HeaderItem,
    'footer-item': FooterItem
  }
}
</script>

<style lang="css">
@import '../assets/css/main.css';
</style>
