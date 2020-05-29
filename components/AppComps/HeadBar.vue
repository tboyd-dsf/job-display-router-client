<template>
  <v-app-bar absolute app dark color="red darken-4" flat>
    <v-toolbar-title>JayLoc Router -- {{ getUser.email }} -- {{ getUser.id }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
      getUser () {
          return this.$store.state.user.currentUser
      }
  }
}
</script>

<style scoped></style>
