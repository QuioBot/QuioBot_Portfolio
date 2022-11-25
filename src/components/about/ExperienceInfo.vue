<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   2019 - Present",
          position: " Data Scientist",
          compnayName: "Linea Directa",
        //   details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        // adipisicing elit`,
        },
        {
          id: 2,
          year: "2018 - 2019",
          position: "Web Developer In Digital Marketing",
          compnayName: "Themeforest",
        //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        // elit, tempor incididunt`,
        },
        {
          id: 2,
          year: "2015 - 2018",
          position: "Email Marketing It",
          compnayName: "Paloma Marketing",
        //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        // elit, tempor incididunt`,
        },
        {
          id: 2,
          year: "2013 - 2015",
          position: "Web Developer",
          compnayName: "Goal Live",
        //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        // elit, tempor incididunt`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
