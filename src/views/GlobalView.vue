<script setup lang="ts">
import { onMounted } from 'vue';
import * as Cesium from 'cesium';
import { TdtImageryProvider, TdtTerrainProvider, type TdtImageryLayer } from 'tdt-cesium';

onMounted(() => {
  const token = 'def6e1f07023220db3571cde3d92bf5e';

  const viewer = new Cesium.Viewer('map-container', {
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    vrButton: false,
    infoBox: false,
    selectionIndicator: false,
    terrainProvider: new TdtTerrainProvider({ token }),
  });
  viewer.scene.globe.baseColor = Cesium.Color.SKYBLUE;
  viewer.scene.postProcessStages.fxaa.enabled = true;
  viewer.scene.globe.showGroundAtmosphere = false;
  // 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
  viewer.scene.screenSpaceCameraController.inertiaZoom = 0.5;
  viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50;
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;
  // viewer.imageryLayers.removeAll();

  (['cia', 'ibo'] as Array<TdtImageryLayer>).forEach((layer) =>
    viewer.imageryLayers.addImageryProvider(new TdtImageryProvider({ token, layer })),
  );

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 17850000),
    complete: function callback() {
      // 定位完成之后的回调函数
    },
  });

  Object.assign(window, { viewer });
});
</script>

<template>
  <div id="map-container"></div>
</template>

<style lang="css" scoped></style>
