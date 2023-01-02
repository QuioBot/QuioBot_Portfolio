<template>
  <div class="row">
    <div
      class="col-6"
      v-for="achievement in achievementsContent"
      :key="achievement.id"
    >
      <div class="box-stats with-margin">
        <h3 class="poppins-font position-relative">
          {{ achievement.title }}
        </h3>
        <p class="open-sans-font m-0 position-relative text-uppercase">
          {{ achievement.subTitle1 }}
          <span class="d-block">{{ achievement.subTitle2 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementsContent: [
        { id: 1, title: "9", subTitle1: "years of", subTitle2: "experience in web development" },
        { id: 2, title: "2", subTitle1: "years of", subTitle2: "experience in data science" },
        // { id: 3, title: "81", subTitle1: "Happy", subTitle2: "customers" },
        // { id: 4, title: "53", subTitle1: "awards", subTitle2: "won" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
