<template>
  <v-app-bar absolute app dark color="red darken-4" flat>
    <v-toolbar-title
      >JayLoc Router -- {{ currentUser.email }} -- {{ currentUser.id }}</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn @click="logoutUser" v-if="userLogged" text>Logout</v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  methods: {
    logoutUser() {
      console.log('logoutUser function running')

      let urlPost = process.env.DEV_API_LOGOUT || process.env.PROD_API_LOGOUT

      axios
        .get(urlPost)
        .then(res => {
          console.log(res)
          this.$store.dispatch('user/logoutUser')
          this.$router.push('/')
        })
        .catch(err => {
          if (err) throw err
        })
    }
  },
  computed: mapState({
    currentUser: state => state.user.currentUser,
    userLogged: state => state.user.userLogged
  })
}
</script>

<style scoped></style>
