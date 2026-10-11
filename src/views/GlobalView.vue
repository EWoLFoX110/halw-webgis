<script setup lang="ts">
import { onMounted } from 'vue';
import * as Cesium from 'cesium';
import { TdtImageryProvider, TdtTerrainProvider, type TdtImageryLayer } from 'tdt-cesium';
import tdt from '@/apis/tianditu';

function initCesiumWithTianditu() {
  const { token, dataUrl, terrainUrl } = tdt;

  const map = new Cesium.Viewer('map-container', {
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
    terrainProvider: new TdtTerrainProvider({
      url: terrainUrl,
      token: token,
    }),
  });
  map.imageryLayers.removeAll();
  map.scene.globe.baseColor = Cesium.Color.SKYBLUE;
  map.scene.postProcessStages.fxaa.enabled = true;
  map.scene.globe.showGroundAtmosphere = false;
  // 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
  map.scene.screenSpaceCameraController.inertiaZoom = 0.5;
  map.scene.screenSpaceCameraController.minimumZoomDistance = 50;
  map.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;

  (['vec', 'cia', 'ibo'] as Array<TdtImageryLayer>).forEach((layer) =>
    map.imageryLayers.addImageryProvider(
      new TdtImageryProvider({
        url: dataUrl,
        token: token,
        layer,
      }),
    ),
  );

  map.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 11156250),
    complete: () => {},
  });

  return map;
}

onMounted(() => {
  const mapObj = initCesiumWithTianditu();
  Object.assign(window, { mapObj });
});
</script>

<template>
  <div id="map-container"></div>
</template>

<style lang="css" scoped></style>
