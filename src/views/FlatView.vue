<script setup lang="ts">
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom';
import { defaults as defaultInteractions } from 'ol/interaction/defaults';
import { onMounted } from 'vue';
import tdt from '@/apis/tianditu';
import { transform as transformCoord } from 'ol/proj';

function initOlMapWithTianditu() {
  const { token, dataUrl, projection } = tdt;
  const layers = ['vec', 'ibo', 'cia'].map((type) => {
    const url = dataUrl.replace('{layer}', type).replace('{token}', token);
    const maxZoom = 18;
    return new TileLayer({
      source: new XYZ({ url, maxZoom }),
    });
  });

  const map = new ol.Map({
    layers,
    target: 'map-container',
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    view: new ol.View({
      center: transformCoord([103.84, 31.15], projection, 'EPSG:3857'),
      zoom: 4.4,
    }),
  });

  return map;
}

onMounted(() => {
  const mapObj = initOlMapWithTianditu();
  Object.assign(window, { mapObj });
});
</script>

<template>
  <div id="map-container"></div>
</template>

<style lang="css" scoped></style>
