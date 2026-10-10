export default {
  token: 'def6e1f07023220db3571cde3d92bf5e',
  subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  url: 'https://t{s}.tianditu.gov.cn/',
  layers: {
    vecW: {
      name: 'vec_w',
      level: 18,
    },
    imgW: {
      name: 'img_w',
      level: 18,
    },
    terW: {
      name: 'ter_w',
      level: 14,
    },
    ciaW: {
      name: 'cia_w',
      level: 18,
    },
    iboW: {
      name: 'ibo_w',
      level: 18,
    },
  },
  cesiumURL(layer: { name: string }): string {
    return this.url + `DataServer?T=${layer.name}&x={x}&y={y}&l={z}&tk=` + this.token;
  },
  cesiumTerrainUrls() {
    return this.subdomains.map((v) => this.url.replace('{s}', v) + 'mapservice/swdx?T=elv_c&tk=' + this.token);
  },
};
