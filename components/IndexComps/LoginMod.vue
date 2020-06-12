<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-form>
        <h1 class="mx-3 my-3">Please Log In</h1>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.email"
                label="Email"
                type="email"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.password"
                label="Password"
                type="password"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn class="red darken-4 mt-2" @click="loginUser">Log In</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <div class="text-center ma-2 mb-4">
      <v-snackbar top v-model="snackbar">
        The email or password you entered was incorrect. Please try again.
        <v-btn color="pink" text @click="snackbar = false">
          Close 
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      },
      snackbar: false
    }
  },
  methods: {
    loginUser() {
      console.log('loginUser function running')

      this.$auth.loginWith('auth0')

      // let urlPost = process.env.NUXT_ENV_API_URL

      // console.log(process.env)

      // // process.env.NUXT_ENV_API_URL ||

      // axios
      //   .post(urlPost, {
      //     email: this.user.email,
      //     password: this.user.password
      //   })
      //   .then(res => {
      //     console.log(res)
      //     this.user.id = res.data.id
      //     this.$store.dispatch('user/setUser', this.user)
      //     this.email = ''
      //     this.pass = ''
      //     this.$router.push('/home')
      //   })
      //   .catch(err => {
      //     this.snackbar = true
      //     this.user.password = ''
      //   })
    }
  }
}
</script>

<style scoped></style>
