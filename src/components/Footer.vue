<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center footer-contain"
    >
      <v-card-text class="white--text pt-6">
        Application made with 💙 by Mourad Mounim!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
.footer-contain {
    width: 100vw;
}
</style>