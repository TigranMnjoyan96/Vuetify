<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary">New Books</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            label="Book Title"
            name="title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'title is required']"
          />

          <v-textarea
            label="Description"
            name="description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'description is required']"
          />
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="warning">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row pt-3>
      <v-flex xs12 sm6 offset-sm3>
        <img src="" alt="" height="100" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-switch
          label="Add to promo?"
          color="orange"
          v-model="promo"
        ></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="success" @click="createBook" :disabled="!valid">
          Create Book
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      valid: false,
      promo: false
    };
  },
  methods: {
    createBook() {
      if (this.$refs.form.validate()) {
        const book = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imgSrc:
            "https://fantasywiki.ru/wp-content/uploads/2018/07/%D0%92%D0%B8%D0%BD%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D1%87%D0%B8%D0%BA%D0%BE%D0%B2.jpg"
        };
        this.$store.dispatch("createBook", book);
      }
    }
  }
};
</script>

<style></style>
