<template>
  <main class="yellow ">
<!--     
    <div id="showSwitcher" className="demo-sticker" data-bs-toggle="modal"
          data-bs-target="#helper">
        <i class="fa fa-gear fa-spin"></i>
    </div> -->



    <div
    class="modal fade"
    id="helper"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content-1 dark">
      

      </div>
    </div>

  
  </div>

    <header class="header">
      
      <ul
        class="nav nav-tabs icon-menu d-lg-block revealator-slideup revealator-once revealator-delay1"
        id="myTab"
        role="tablist"
      >
        <!-- <li id="showSwitcher" class="icon-setting"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
            <i class="fa fa-gear fa-spin"></i>
        </li>  -->

        <li class="icon-box" role="presentation">
          <button class="active" data-bs-toggle="tab" data-bs-target="#home">
            <i class="fa fa-home"></i>
            <h2>Home</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#about">
            <i class="fa fa-user"></i>
            <h2>About</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#portfolio">
            <i class="fa fa-briefcase"></i>
            <h2>Projects</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#contact">
            <i class="fa fa-envelope-open"></i>
            <h2>Contact</h2>
          </button>
        </li>
        <!-- End icon-box -->
      </ul>
      
    </header>

    <div class="tab-content tab-panel_list home" id="myTabContent">

      <!-- Start Hero content tabs -->
      <div class="tab-pane home fade show active" id="home">
        <div class="container-fluid main-container container-home p-0">
          <div class="color-block d-none d-lg-block"></div>
          <HeroBanner />
        </div>
      </div>
      <!-- End Hero content tabs -->

      <div class="tab-pane fade about" id="about">
        <div>
          <div class="title-section text-left text-sm-center">
            <h1>ABOUT <span>ME</span></h1>
            <span class="title-bg">Resume</span>
          </div>
          <!-- {/* End title */} -->
          <IndexMain />
        </div>
      </div>
      <!-- End about content tabs -->

      <div class="tab-pane fade portfolio professional" id="portfolio" >
        <div
          class="title-section text-left text-sm-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>my <span>projects</span></h1>
          <span class="title-bg">works</span>
        </div>
        <!-- {/* End title */} -->
        <PortfolioInfo />
      </div>
      <!-- End portfolio content tabs -->

      <div class="tab-pane fade contact" id="contact">
        <div class="title-section text-left text-sm-center">
          <h1>get in <span>touch</span></h1>
          <span class="title-bg">contact</span>
        </div>
        <div class="container">
          <div class="row">
            <!-- {/* Left Side Starts */} -->
            <div class="col-12 col-lg-4">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Contact Us
              </h3>
              <p class="open-sans-font mb-4">
                If you’d like to know more about my work or process feel free to get in touch.
              </p>
              <AddressInfo />
              <!-- {/* End Address */} -->

              <SocialInfo />
              <!-- {/* End Social */} -->
            </div>
            <!-- {/* Left Side Ends */} -->

            <!-- {/* Contact Form Starts */} -->
            <div class="col-12 col-lg-8">
              <ContactInfo />
            </div>
            <!-- {/* Contact Form Ends */} -->
          </div>
        </div>
        <!-- {/* End .container */} -->
      </div>
      <!-- End contact content tabs -->
      
    </div>
    
  </main>


</template>

<script>
import HeroBanner from "@/components/hero/HeroBanner.vue";
import IndexMain from "@/components/about/IndexMain.vue";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import SocialInfo from "@/components/SocialInfo.vue";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo.vue";


export default {
  components: {
    HeroBanner,
    IndexMain,
    AddressInfo,
    ContactInfo,
    SocialInfo,
    PortfolioInfo,
  },
  data() {
    return {

      // color: null,
      // colors: ["#00ffda", "#c4066a", "#4169e1", "#ffb400", '#ff4848', "#8a2be2","#73b625","#f72b1c"],


    };
  },
  methods: {
    add :function(color) {
        this.root = document.documentElement;
        this.root.style.setProperty('--main-primary-color' ,color)
  }
  },

  mounted() {
    document.body.classList.add("dark");
  },
  unmounted() {
    document.body.classList.remove("light");
  },
  
};
</script>
<style>

</style>

