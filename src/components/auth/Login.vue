<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  />

                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :rules="[rules.required, rules.min]"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="onSubmit" :disabled="!valid"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    valid: false,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 6 || "Min 6 characters"
    }
  }),
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const login = {
          email: this.email,
          password: this.password
        };
        console.log(login)
      }
    }
  }
};
</script>

<style></style>
