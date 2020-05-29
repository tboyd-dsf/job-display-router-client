<template>
  <v-card class="mx-auto" max-width="500">
    <v-form>
      <h1 class="mx-3 my-3">Please Log In</h1>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="user.email" label="Email" type="email" clearable></v-text-field>
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
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex'
export default {
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser() {
      console.log('loginUser function running')

      let url = 'https://job-location-router-server.herokuapp.com/api/login'
      let urlPost = process.env.API_URL || url
      
      axios.post(urlPost, {
        email: this.user.email,
        password: this.user.password
      })
      .then(res => {
        console.log(res)
        this.user.id = res.data.id
        this.$store.dispatch('user/setUser', this.user)
        this.email = ''
        this.pass = ''
        this.$router.push('/home')
      })
      .catch(err => {
        if (err) throw err
      })
    }
  } //comment
}
</script>

<style scoped></style>
