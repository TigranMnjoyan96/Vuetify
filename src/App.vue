<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense v-for="(item, key) in links" :key="key" >
        <v-list-item-group color="primary">
          <v-list-item :to="item.url">
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-btn text @click="drawer = !drawer" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to="/" class="pointer" tag="span">Home</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text left v-for="(item, key) in links" :key="key" :to="item.url">
          <v-icon>mdi-{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "Login", icon: "lock", url: "/login" },
      { title: "Registration", icon: "face", url: "/registration" },
      { title: "Orders", icon: "bookmark", url: "/orders" },
      { title: "New Book", icon: "note", url: "/new" },
      { title: "My Books", icon: "view-list", url: "/list" }
    ]
  })
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
