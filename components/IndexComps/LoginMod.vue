<template>
  <v-card class="mx-auto" max-width="500">
    <v-form>
      <h1 class="mx-3 my-3">Please Log In</h1>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" label="Email" type="email" clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="pass"
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
export default {
  data: () => {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    loginUser() {
      console.log('loginUser function running')
      axios.post("http://localhost:3030/api/login", {
        email: this.email,
        password: this.pass
      })
      .then(res => {
        console.log(res)
        this.email = ''
        this.pass = ''
      })
    }
  }
}
</script>

<style scoped></style>
