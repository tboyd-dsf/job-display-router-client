<template>
  <div class="container">
    <div class="py-6"></div>
    <gmap-map
      :center="{ lat: 38.935337, lng: -94.760773 }"
      :zoom="11"
      map-type-id="roadmap"
      style="width: 100%; height: 700px; margin: auto;"
    >
    <gmap-marker
      v-for="(m, index) in places"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    />
    </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

let theKey = process.env.MAPS_KEY || 'AIzaSyC_oA-1diHOvmftF8uchMe-g86udCdzfk8'

Vue.use(VueGoogleMaps, {
  load: {
    key: theKey,
    libraries: 'places'
  }
})

export default {
  data() {
    return {
      places: [
        {position: {lat:39.11, lng:-94.62}},
        {position: {lat:39.10, lng:-94.64}},
        {position: {lat:39.07, lng:-94.63}},
        {position: {lat: 38.935337, lng: -94.760773}}
      ]
    }
  }
}
</script>

<style scoped></style>
