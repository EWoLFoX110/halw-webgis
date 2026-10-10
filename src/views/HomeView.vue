<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <v-sheet class="home-view">
    <RouterLink class="router-link" style="background: url('/global.png')" to="/3dmap">
      <h1>3D</h1>
    </RouterLink>
    <RouterLink class="router-link" style="background: url('/flatmap.png')" to="/flatmap">
      <h1>Flat</h1>
    </RouterLink>
  </v-sheet>
</template>

<style lang="css" scoped>
.home-view {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
.router-link {
  width: 500px;
  height: 500px;
  text-decoration: none;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 12px;
  box-shadow:
    0px 1px 2px 0px rgba(var(--v-shadow-color), var(--v-shadow-key-opacity, 0.3)),
    0px 2px 6px 2px rgba(var(--v-shadow-color), var(--v-shadow-ambient-opacity, 0.15));
  overflow: hidden;
}
h1 {
  margin: 0;
  text-align: center;
  color: navy;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
