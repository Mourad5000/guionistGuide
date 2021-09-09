<template>
  <fixed-header>
    <nav class="navbar">
      <router-link to="/" class="navbar__item">
        <p>Characters list</p>
      </router-link>
      <router-link to="/backRequests" class="navbar__item">
        <p>Back end requests</p>
      </router-link>
    </nav>
  </fixed-header>
</template>

<script>
import FixedHeader from "vue-fixed-header";

export default {
  components: {
    FixedHeader,
  },
};
</script>

<style>
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar__item {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
}

 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: indianred;
    text-decoration: underline;

 }
</style>
