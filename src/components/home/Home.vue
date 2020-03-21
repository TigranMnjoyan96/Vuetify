<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in promo"
              :key="item.id"
              :src="item.imgSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-btn
                color="red"
                class="btn-absolute"
                :to="'/book/' + item.id"
                >{{ item.title }}</v-btn
              >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap
        ><v-flex lg4 sm6 flex v-for="item in books" :key="item.id">
          <v-card class="mx-auto" max-width="300">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.imgSrc"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <div class="text--primary">
              <div>{{ item.description }}</div>
            </div>

            <v-card-actions>
              <v-btn color="orange" text :to="'/book/' + item.id">
                Open
              </v-btn>

              <v-btn color="primary" text>
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.getters.books;
    },
    promo() {
      return this.$store.getters.promo;
    }
  }
};
</script>

<style scoped>
.btn-absolute {
  position: absolute;
  bottom: 50px;
  left: 45%;
  width: 10%;
}
</style>
