import { HOST, FILE_HOST } from './host.js';

function replacePlaceholders(data) {
  const jsonString = JSON.stringify(data);
  const replaced = jsonString
    .replace(/\$\{HOST\}/g, HOST)
    .replace(/\$\{FILE_HOST\}/g, FILE_HOST);
  return JSON.parse(replaced);
}

import cesiumData from './cesium-examples.json' assert { type: 'json' };

const processedData = replacePlaceholders(cesiumData);

export default processedData;