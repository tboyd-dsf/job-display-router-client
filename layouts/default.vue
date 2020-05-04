<template>
  <v-app dark>
    <head-bar></head-bar>
    <v-content>
      <nuxt></nuxt>
    </v-content>
    <div class="py-12"></div>
    <div class="py-12"></div>
    <div class="py-12"></div>
    <div class="py-12"></div>
    <div class="py-12"></div>
    <div class="py-12"></div>
    <div class="py-12"></div>
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
