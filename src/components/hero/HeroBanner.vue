<template>
  <div class="row home-details-container align-items-center">
    <div

      class="col-lg-4 bg position-fixed d-none d-lg-block hero-img" 
      :style="{ backgroundImage: 'url(' + heroContent.heroImage + ')' }"
    ></div>
    <div
      class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start"
    >
      <div>
        <div class="change-theme-color"  v-for="c of colors"
      :key="c"
      :style="{
        'background-color': c,
      }"
      @click="add(c)">
    </div>
        <img
          :src="heroContent.heroMobileImage"
          class="img-fluid main-img-mobile d-sm-block d-lg-none"
          alt="hero man"
        />
        <h1 class="text-uppercase poppins-font">
          I'm {{ heroContent.heroTitleName }}.
          <!-- <span style="background-color:#cfa144">{{ heroContent.heroDesignation }}</span> -->
          <span>{{ heroContent.heroDesignation }}</span>
        </h1>
        <p  class="open-sans-font">{{ heroContent.heroDescriptions }}</p>

        <button
        style="margin:5px;"
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span class="button-text">{{ heroContent.heroBtn }}</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </button>


        <a
        style="margin:5px;"
          class="button"
          :href="github" target="_blank"
        >
          <span class="button-text">{{ heroContent.heroBtn2 }}</span>
          
      </a>
        
      </div>
    </div>
    
  </div>
  <!-- {/* End home-details-container */} -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content dark">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <img src="../../assets/images/cancel.svg" alt="close image" />
        </button>
        <div class="modal-body">
          <div class="box_inner about">
            <div class="title-section text-left text-sm-center">
              <h1>ABOUT <span>ME</span></h1>
              <span class="title-bg">Resume</span>
            </div>
            <!-- {/* End title */} -->
            <IndexMain />
          </div>
        </div>
      </div>
    </div>

  
  </div>
  <!-- End Modal -->
</template>

<script>
import IndexMain from "../about/IndexMain.vue";
// import EducationInfo from "../about/EducationInfo";
// import ExperienceInfo from "../about/ExperienceInfo";
export default {
  data() {
    return {
      github : "https://github.com/omar-elghiba",
      root: null,
      color: null,
      colors: ["#00ffda", "#c4066a", "#4169e1", "#ffb400", '#ff4848', "#8a2be2","#73b625","#f72b1c"],
      backgroundColor: undefined,
      heroContent: {
        heroImage: require(`@/assets/images/hero/img-mobile.jpg`),
        heroMobileImage: require(`@/assets/images/hero/img-mobile.jpg`),
        heroTitleName: "Omar El Ghiba",
        heroDesignation: "Data Scientist",
        heroDescriptions: `I'm a Data scientist (MLOPS) & Full Stack Web Developer & Devops Developer focused on
        creating Web Ai Solution End to End Project, I am passionate about building excellent Website that use Machine learning and Deep Learning , Vuejs in Frontend ,
        Djando ,Fastapi , Php in Backend ,Postgres and Mongodb for Sql and NoSql Databases, Github Action for CI/CD and Kubernetes, Docker, Docker Compose for Deployment.`,
        heroBtn: "more about me",
        heroBtn2: "Github Repository",
      },
    };
  },
  components: { IndexMain   },
  methods: {
    add :function(color) {
        this.root = document.documentElement;
        this.root.style.setProperty('--main-primary-color' ,color)
  }
  },
};
</script>

<style lang="scss" scoped>
</style>



