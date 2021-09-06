<template>
  <v-app>
    <v-main class="app-wrapper">
      <router-view/>
    </v-main>
      <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    Footer
  }
};
</script>
<style>
.app-wrapper{
  padding:0px 10px;
}
</style>