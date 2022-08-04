<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <RouterLink
      to="/about"
      class="user">
      <img
        src="~/assets/me.jpg"
        alt="me" />
    </RouterLink>
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: "Search",
          href: "/"
        },
        {
          name: "Movie",
          href: "/movie",
          path: /^\/movie/
        },
        {
          name: "About",
          href: "/about"
        }
      ]
    }
  },
  methods : {
    isMatch(path) {
      if (!path) return false
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 2px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  @include media-breakpoint-down(sm) { //sm은 small사이즈, small사이즈보다 작은경우, 
    .nav {
      display: none;
    }
  }
}
</style>