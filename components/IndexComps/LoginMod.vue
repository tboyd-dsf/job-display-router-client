<template>
  <v-card class="mx-auto" max-width="500">
    <v-form>
      <h1 class="mx-3 my-3">Please Log In</h1>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Email" type="email" clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Password"
              type="password"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn class="red darken-4 mt-2">Log In</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped></style>
