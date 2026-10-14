import { TDT_TOKEN } from '@/token';

export default {
  token: TDT_TOKEN,
  subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  dataUrl: '/DataServer?T={layer}_w&x={x}&y={y}&l={z}&tk={token}',
  terrainUrl: '/mapservice/swdx?T=elv_c&x={x}&y={y}&l={z}&tk={token}',
  projection: 'EPSG:4326',
};
