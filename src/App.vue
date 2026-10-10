<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar title="WebGIS">
      <span><RouterLink to="/3dmap">3D</RouterLink></span>
      <span><RouterLink to="/flatmap">flatmap</RouterLink></span>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
span {
  margin-right: 20px;
}
</style>
