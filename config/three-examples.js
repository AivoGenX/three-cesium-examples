import { HOST, FILE_HOST } from './host.js';

function replacePlaceholders(data) {
  const jsonString = JSON.stringify(data);
  const replaced = jsonString
    .replace(/\$\{HOST\}/g, HOST)
    .replace(/\$\{FILE_HOST\}/g, FILE_HOST);
  return JSON.parse(replaced);
}

import threeData from './three-examples.json' assert { type: 'json' };

const processedData = replacePlaceholders(threeData);

export default processedData;