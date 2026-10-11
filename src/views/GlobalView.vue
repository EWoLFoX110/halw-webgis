<script setup lang="ts">
import { onMounted } from 'vue';
import * as Cesium from 'cesium';
import { TdtTerrainProvider, type TdtImageryLayer } from 'tdt-cesium';
import tdt from '@/apis/tianditu';

onMounted(() => {
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
    terrainProvider: new TdtTerrainProvider({ token: tdt.token }),
  });
  viewer.scene.globe.baseColor = Cesium.Color.SKYBLUE;
  viewer.scene.postProcessStages.fxaa.enabled = true;
  viewer.scene.globe.showGroundAtmosphere = false;
  // 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
  viewer.scene.screenSpaceCameraController.inertiaZoom = 0.5;
  viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50;
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;

  (['img_w', 'cia_w', 'ibo_w'] as Array<TdtImageryLayer>).forEach((layer) =>
    viewer.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: tdt.cesiumURL(layer),
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        maximumLevel: 18,
      }),
    ),
  );

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 17850000),
    complete: () => {},
  });

  Object.assign(window, { viewer });
});
</script>

<template>
  <div id="map-container"></div>
</template>

<style lang="css" scoped></style>
