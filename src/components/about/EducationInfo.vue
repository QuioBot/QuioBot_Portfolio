<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2022",
          degree: "MASTER DEGREE IN ARTIFICIAL INTELIGENCE OF THING AND INNOVATION",
          institute: "Hassania School of Public Works Engeniring School",
        },
        {
          id: 2,
          year: "2021",
          degree: "TensorFlow Developer Professional Certificate",
          institute: "DeepLearning.AI",
        },
        {
          id: 3,
          year: "2021",
          degree: "Natural Language Processing Nanodegree",
          institute: "Udacity",
        },
        {
          id: 4,
          year: "2021",
          degree: "Deep Reinforcement Learning Nanodegree",
          institute: "Udacity",
        },
        {
          id: 5,
          year: "2018",
          degree: "BACHELOR DEGREE IN MATHEMATICAL AND COMPUTER SCIENCE",
          institute: "ABDELMALEK ESSAADI UNIVERSITY",
        },
        {
          id: 6,
          year: "2012",
          degree: "BACHELOR DEGREE IN MATHEMATICAL SCIENCE B",
          institute: "HASSAN 2 HIGH SCHOOL",
        },
        
        
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
