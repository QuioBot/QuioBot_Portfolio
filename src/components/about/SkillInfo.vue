<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p100", skillPercent: "PYTHON", skillName: "PYTHON" },
        { id: 1, skillClass: "p100", skillPercent: "Js", skillName: "JAVASCRIPT" },
        { id: 1, skillClass: "p100", skillPercent: "DJANGO", skillName: "DJANGO" },
        { id: 1, skillClass: "p100", skillPercent: "VUEJS", skillName: "VUEJS" },
        { id: 1, skillClass: "p100", skillPercent: "FASTAPI", skillName: "FASTAPI" },
        { id: 1, skillClass: "p100", skillPercent: "DP", skillName: "Deep Learning" },
        { id: 1, skillClass: "p100", skillPercent: "ML", skillName: "MACHINE LEARNING" },
        { id: 1, skillClass: "p100", skillPercent: "DEVOPS", skillName: "DEVOPS" },
        { id: 1, skillClass: "p100", skillPercent: "MLOPS", skillName: "MLOPS" },
        { id: 1, skillClass: "p100", skillPercent: "CLOUD", skillName: "CLOUD" },
        // { id: 1, skillClass: "p100", skillPercent: "ML", skillName: "MACHINE LEARNING" },
        // { id: 1, skillClass: "p100", skillPercent: "DEVOPS", skillName: "DEVOPS" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
