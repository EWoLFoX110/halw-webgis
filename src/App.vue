<script setup lang="ts"></script>

<template>
  <v-app class="d-flex flex-column">
    <v-app-bar>
      <v-app-bar-title>
        <RouterLink class="router-link" to="/">
          <v-icon size="x-large" icon="mdi-map-plus" class="mr-4" />
          WebGIS
        </RouterLink>
      </v-app-bar-title>
      <span class="mr-4"><RouterLink class="router-link" to="/3dmap">3D</RouterLink></span>
      <span class="mr-4"><RouterLink class="router-link" to="/flatmap">Flat</RouterLink></span>
    </v-app-bar>
    <v-main class="main">
      <router-view class="view" />
    </v-main>
  </v-app>
</template>

<style scoped>
.router-link {
  font-weight: 900;
  color: black;
  text-decoration: none;
}
.main {
  flex-grow: 2;
  overflow: hidden;
  position: relative;
}
.main > .view {
  height: calc(100vh - 64px);
}
</style>
