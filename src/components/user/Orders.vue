<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 mt-5>
        <h2 class="text--secondary mb-3">Orders</h2>

        <v-list two-line flat color="#F5F5F5">
          <v-list-item-group multiple>
            <v-list-item v-for="order in orders" :key="order.id">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    color="primary"
                    @click="orDone(order)"
                    :input-value="order.done"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn class="primary" :to="'/book/' + order.orderId">Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    orders: [
      {
        id: "v-21-or-sl4185657",
        name: "John",
        phone: "374-93-84-58-94",
        orderId: "o-51s-sdv5",
        done: false
      }
    ]
  }),
  methods: {
    orDone(order) {
      order.done = true;
    }
  }
};
</script>

<style></style>
