<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="getId.imgSrc" height="300px"></v-img>
          <v-card-text>
            <h2>{{ getId.title }}</h2>
            <p>{{ getId.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    getId() {
      return this.$store.getters.getById(this.id);
    }
  }
};
</script>

<style></style>
