<template>
  <v-app dark>
    <v-header>
      <head-bar></head-bar>
    </v-header>
    <v-content>
      <nuxt></nuxt>
    </v-content>
    <foot-bar></foot-bar>
  </v-app>
</template>

<script>
import HeadBar from '../components/AppComps/HeadBar.vue'
import FootBar from '../components/AppComps/FootBar.vue'
export default {
  data() {
    return {}
  },
  components: {
    HeadBar,
    FootBar
  }
}
</script>
