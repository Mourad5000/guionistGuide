<template>
  <v-app class="app-wrapper">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style>
.app-wrapper{
  padding:0px 10px;
}
</style>