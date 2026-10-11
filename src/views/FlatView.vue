<script setup lang="ts">
import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import { onMounted } from 'vue';
import tdt from '@/apis/tianditu';

const { token } = tdt;

function createTiandituLayer(type: 'vec' | 'img' | 'ibo' | 'cia'): TileLayer<XYZ> {
  return new TileLayer({
    source: new XYZ({
      // 天地图 XYZ 瓦片服务地址模板
      url: `/DataServer?T=${type}_w&x={x}&y={y}&l={z}&tk=def6e1f07023220db3571cde3d92bf5e`,
      maxZoom: 18,
    }),
  });
}

onMounted(() => {
  const viewer = new ol.Map({
    target: 'map-container',
    layers: [
      // 加载天地图矢量底图
      createTiandituLayer('vec'),
      createTiandituLayer('ibo'),
      createTiandituLayer('cia'),
    ],
    view: new ol.View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  Object.assign(window, { viewer });
});
</script>

<template>
  <div id="map-container"></div>
</template>

<style lang="css" scoped></style>
