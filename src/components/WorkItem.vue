<template>
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
</template>

<script>
require('magnific-popup')
// http://isotope.metafizzy.co.s3-website-us-east-1.amazonaws.com/extras.html#webpack
let jQueryBridget = require('jquery-bridget')
let Isotope = require('isotope-layout')
jQueryBridget('isotope', Isotope, $)
/* ---- Portfolio Isotope ---- */
$(function () {
  var $grid = $('.grid').isotope({
    layoutMode: 'masonry'
  })
  $('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter')
    $grid.isotope({
      filter: filterValue
    })
  })
  $('.filter-button-group').each(function (t, e) {
    var i = $(e)
    i.on('click', 'li', function () {
      i.find('.active').removeClass('active')
      $(this).addClass('active')
    })
  })

  /* ---- our work gallery ---- */
  $('#work').magnificPopup({
    delegate: 'a.zoom',
    type: 'image',
    fixedContentPos: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      preload: [0, 2]
    }
  })

  /* ---- popup image ---- */
  $('.popup-img').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  })

  /* ---- popup video ---- */
  $(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    })
  })
})

export default {
  name: 'work-item'

}
</script>

<style scoped>

  /* =Work
  -------------------------------------------------------------- */
  .grid-item {
    position: relative;
    margin-bottom: 30px;
  }

  .grid-item:hover .overlay {
    opacity: 1;
    -webkit-box-shadow: -1px 4px 32px -3px rgba(0,0,0,0.13);
    -moz-box-shadow: -1px 4px 32px -3px rgba(0,0,0,0.13);
    box-shadow: -1px 4px 32px -3px rgba(0,0,0,0.13);
  }

  .grid-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.94);
    opacity: 0;
    -webkit-transition: .3s all;
    -o-transition: .3s all;
    transition: .3s all;
  }

  .grid-item .overlay .inner-overlay {
    width: 100%;
    text-align: center;
    position: absolute;
    padding: 0 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .grid-item .overlay .inner-overlay h4 {
    letter-spacing: 2px;
    color: #474747;
    margin: 0 0 5px;
    text-transform: uppercase;
  }

  .grid-item .overlay .inner-overlay span {
    font-size: 14px;
    letter-spacing: 1px;
    color: #a9a9a9;
    font-style: italic;
  }

  .list-work-filter {
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 0;
  }

  .list-work-filter > li {
    font-size: 14px;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: 10px;
    height: 30px;
    line-height: 31px;
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
  }

  .list-work-filter > li:last-child {
    margin-right: 0;
  }

  .list-work-filter > li:hover {
    background-color: #fff;
    color: #474747;
    cursor: pointer;
  }

  .list-work-filter > li.active {
    background-color: #fff;
    color: #474747;
  }

</style>
