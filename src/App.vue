<template>
  <v-app>
    <Header />
    <v-main class="app-wrapper">
      <router-view/>
    <notifications group="notification" position="bottom right" />
    </v-main>
      <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components:{
    Footer, Header
  }
};
</script>
<style>
.app-wrapper{
  padding:0px 10px;
}
</style>