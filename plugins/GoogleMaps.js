import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBixdZ59lvciQCEdgRo3ggV2-UyDZeK9jA',
        libraries: 'places'
    }
})