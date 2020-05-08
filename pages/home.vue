<template>
  <div>
    <gmap-map
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px; margin: auto;"
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
