<template>
  <div class="about">
    <div class="photo">
      <img
        src="~/assets/me.jpg"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <a
      :href="github"
      target="_blank">https://github.com/suwoncityBoy</a>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.about.name
    },
    email() {
      return this.$store.state.about.email
    },
    github() {
      return this.$store.state.about.github
    },
    phone() {
      return this.$store.state.about.phone
    }
   }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>