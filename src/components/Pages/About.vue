<template>
  <!-- Begin About -->
  <section id="about" class="section-padding section-border-bottom">
    <div class="container">
      <!-- Title -->
      <div class="row mb60">
        <div class="col-xs-12 text-center">
          <h2>About</h2>
          <span class="divider divider-center divider-dark no-margin-bottom"></span>
        </div><!-- /.column -->
      </div><!-- /.row -->

      <!-- Row 1 - Information / Carousel / Main Services -->
      <div class="row mb40">
        <!-- Information -->
        <div class="col-sm-12 col-md-6 col-lg-6 leftReveal">
          <h3 class="mb20"><span class="paragraph-logo">R</span> Information.</h3>
          <p class="lead-rolla mb15">At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Hos contra singulos dici est melius. Oculorum, inquit Plato, est in acerrimus.</p>
          <p class="mb20">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Itaque sensibus rationem adiunxit et ratione effecta sensus non.Taque sensibus rationem adiunxit et.</p>
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default btn-lg scroll-link" data-id="work" href="#work">Portfolio</button>
            <button type="button" class="btn btn-primary btn-lg scroll-link" data-id="experience" href="#experience">Resume</button>
          </div>
        </div><!-- /.column -->

        <!-- Carousel -->
        <div class="col-sm-8 col-md-5 col-lg-4 mt40-xs mt40-sm topReveal">
          <div class="carousel slide" data-ride="carousel" id="carousel-about">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li class="active" data-slide-to="0" data-target="#carousel-about"></li>
              <li data-slide-to="1" data-target="#carousel-about"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img alt="..." src="/static/tmp/images/work/4.jpg">
              </div>
              <div class="item">
                <img alt="..." src="/static/tmp/images/work/4.jpg">
              </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-about" role="button" data-slide="prev">
              <span class="ion-ios-arrow-left carousel-arrow" aria-hidden="true"></span>
            </a>
            <a class="right carousel-control" href="#carousel-about" role="button" data-slide="next">
              <span class="ion-ios-arrow-right carousel-arrow" aria-hidden="true"></span>
            </a>
          </div><!-- /.carousel -->
        </div><!-- /.column -->

        <!-- Features -->
        <div class="col-sm-4 col-md-1 col-lg-2 mt40-xs skill-holder rightReveal">
          <h4 class="mt15 mb15 spaced">
            <span class="icon-holder ion-ios-monitor"></span>
            <span class="hidden-md">Web</span>
          </h4>
          <h4 class="mb15 spaced">
            <span class="icon-holder ion-iphone"></span>
            <span class="hidden-md">App</span>
          </h4>
          <h4 class="mb15 spaced">
            <span class="icon-holder ion-playstation"></span>
            <span class="hidden-md">Ico</span>
          </h4>
          <h4 class="no-margin-bottom spaced">
            <span class="icon-holder ion-gear-a"></span>
            <span class="hidden-md">Dev</span>
          </h4>
        </div><!-- /.column -->
      </div><!-- /.row -->

      <!-- Row 2 - Progress Bars / Quote -->
      <div class="row mb40">
        <!-- Skills -->
        <div class="col-md-3 leftReveal">
          <h5 class="heading-1 mb20">Skills</h5>
          <p><em>At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intelli egam quid sentiat; Itaque sensibus rationem adiunxit et rati one effecta sensus non grinder single.</em></p>
          <p class="no-margin">Taque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Con panna organic americano.</p>
        </div><!-- /.column -->

        <!-- Progress Bars -->
        <div class="col-md-5 topReveal">
          <div class="progress-bars-holder">
            <!-- Bar #1 -->
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
                <span class="sr-only">90% Complete</span>
              </div>
            </div><!-- /.bar -->
            <small class="text-light">Design</small>

            <!-- Bar #2 -->
            <div class="progress mt15">
              <div class="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style="width: 82%;">
                <span class="sr-only">82% Complete</span>
              </div>
            </div><!-- /.bar -->
            <small class="text-light">Development</small>

            <!-- Bar #3 -->
            <div class="progress mt15">
              <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;">
                <span class="sr-only">95% Complete</span>
              </div>
            </div><!-- /.bar -->
            <small class="text-light">Branding</small>

            <!-- Bar #4 -->
            <div class="progress mt15">
              <div class="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" style="width: 76%;">
                <span class="sr-only">76% Complete</span>
              </div>
            </div><!-- /.bar -->
            <small class="text-light">Technology</small>
          </div><!-- /.progress bars holder -->
        </div><!-- /.column -->

        <!-- Quote -->
        <div class="col-md-4 mt30-xs mt30-sm rightReveal">
          <h5 class="heading-1 mb20">Quote</h5>
          <p class="lead-sm text-light no-margin">“Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences.”</p>
          <div class="quote-author">- Steve Jobs</div>
        </div><!-- /.column -->
      </div><!-- /.row -->

      <!-- Row 3 - Process -->
      <div class="row">
        <!-- Step 1 -->
        <div class="col-md-3 bottomReveal">
          <h4 class="spaced no-margin-top mb15">
            <span class="icon-holder">1</span>
            Idea
          </h4>
          <p class="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
        </div><!-- /.column -->

        <!-- Step 2 -->
        <div class="col-md-3 mt30-xs mt30-sm bottomReveal">
          <h4 class="spaced no-margin-top mb15">
            <span class="icon-holder">2</span>
            Plan
          </h4>
          <p class="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
        </div><!-- /.column -->

        <!-- Step 3 -->
        <div class="col-md-3 mt30-xs mt30-sm bottomReveal">
          <h4 class="spaced no-margin-top mb15">
            <span class="icon-holder">3</span>
            Design
          </h4>
          <p class="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
        </div><!-- /.column -->

        <!-- Step 4 -->
        <div class="col-md-3 mt30-xs mt30-sm bottomReveal">
          <h4 class="spaced no-margin-top mb15">
            <span class="icon-holder">4</span>
            Execute
          </h4>
          <p class="no-margin-bottom">At multis se probavit. Si alia sentit, inquam, alia loquitur, numquam intel legam quid sentiat; Itaque sensibus rationem adiunxit et ratione.</p>
        </div><!-- /.column -->
      </div><!-- /.row -->

    </div><!-- /.container -->
  </section>
  <!-- End About -->
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
