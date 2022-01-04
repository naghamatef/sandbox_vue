<template>
  <v-app>
    <mainlayout />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {
    mainlayout: () => import("./layouts/default"),
  },

  data: () => ({
    //
  }),
};
</script>