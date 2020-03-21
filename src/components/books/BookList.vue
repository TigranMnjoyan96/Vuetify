<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class="text--secondary">Book List</h1>
        <v-card v-for="item in myBooks" class="card" :key="item.id">
          <v-img
            :src="item.imgSrc"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="item.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-card-title v-text="item.description"> </v-card-title>
            <v-spacer></v-spacer>

            <v-btn :to="'/book/' + item.id" class="info">
              Open
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myBooks() {
      return this.$store.getters.myBooks;
    }
  }
};
</script>

<style scope>
.card {
  margin-bottom: 20px;
}
</style>
