<template>
  <div class="container">
      <div class="py-6"></div>
    <gmap-map
      :center="{ lat: 38.93, lng: -94.76 }"
      :zoom="11"
      map-type-id="terrain"
      style="width: 100%; height: 700px; margin: auto;"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBixdZ59lvciQCEdgRo3ggV2-UyDZeK9jA',
        libraries: 'places'
    }
})
 
export default {
  data() {
    return {}
  }
}
</script>

<style scoped></style>
