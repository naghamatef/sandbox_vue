<template>
  <main>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      left
    >
      <v-list>
        <v-list-group>
          <v-list-item v-for="link in links" :key="link.name" :to="list.to">
            <v-list-title>{{ list.name }}</v-list-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </main>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      {
        to: "/customers",
        name: "Customers",
      },
      {
        to: "/Categories",
        name: "categories",
      },
      {
        to: "/products",
        name: "Products",
      },
    ],
  }),
};
</script>