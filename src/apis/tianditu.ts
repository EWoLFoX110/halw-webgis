export default {
  token: 'def6e1f07023220db3571cde3d92bf5e',
  subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  url: '/',
  cesiumURL(layer: string): string {
    return this.url + `DataServer?T=${layer}&x={x}&y={y}&l={z}&tk=` + this.token;
  },
  cesiumTerrainUrls() {
    return this.subdomains.map((v) => this.url.replace('{s}', v) + 'mapservice/swdx?T=elv_c&tk=' + this.token);
  },
};
