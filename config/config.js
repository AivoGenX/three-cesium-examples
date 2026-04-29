import cesiumExamples from "./cesium-examples.js";
import threeExamples from "./three-examples.js";
import webglGpuExamples from "./webgl-gpu-examples.js";
import githubExamples from "./github-examples.js";


import threeCesiumAuthors from "./author.js";

import { HOST, FILE_HOST } from "./host.js";
import threeCesiumLinks from "./links.js";
window.THREE_CESIUM_LINKS = threeCesiumLinks;
window.THREE_CESIUM_TITLE= 'ThreeLab三维创意空间';

window.FILE_HOST = FILE_HOST;

window.THREE_CESIUM_NAVIGATION = [
  { name: "Three.js案例",label: "Three.js案例", examples: threeExamples }, 
  { name: "Cesium.js案例",label: "Cesium.js案例", examples: cesiumExamples },
  { name: "WebGL/GPU",label: "WebGL/GPU", examples: webglGpuExamples }, 
  { name: "Github案例",label: "Github案例", examples: githubExamples},
];

window.THREE_CESIUM_AUTHORS = threeCesiumAuthors;

window.__SITE_URLS__ = {
  gitee: 'https://gitee.com/giser2017/3d-lab-demos',
  github: 'https://github.com/AivoGenX/3d-lab-demos',
  web: 'https://threelab.cn/'
};

window.GET_SCRIPT = (v, t) => {
  let scriptContent = ``; 
  if (t === "Cesium.js案例") {
    let processedCode = v;
    const importMapMatch = v.match(
      /<script type=["']importmap["']>([\s\S]*?)<\/script>/i,
    );

    if (importMapMatch) {
      let importMapContent = importMapMatch[1];
      importMapContent = importMapContent.replace(
        /"cesium":\s*"[^"]*"/g,
        `"cesium": "${HOST}js/cesium/Cesium.js"`,
      );
      processedCode = v.replace(
        /<script type=["']importmap["']>[\s\S]*?<\/script>/i,
        `<script type="importmap">${importMapContent}</script>`,
      );
    } else {
      processedCode = `
      <script type="importmap">
        {
          "imports": {
            "cesium": "${HOST}js/cesium/Cesium.js"
          }
        }
      </script>
      ${v}`;
    }

    processedCode = processedCode.replace(
      /Cesium\.Ion\.defaultAccessToken\s*=\s*["'][^"']+["']/,
      `Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYzNhMmIwMy1lMGIyLTQ2NDUtODIzMC1jM2I3ZjI2YzU5OGYiLCJpZCI6MTc4MDksImlhdCI6MTc0ODkxODczMH0._xb05tOT0z-ECzQh-WU6jyDG9Jd6MsKlCx03PbSZDp0"`,
    );

    return `
    <link rel="stylesheet" href="${HOST}js/cesium/style.css">
      <style>
        body { margin: 0; padding: 1px; box-sizing: border-box; background-color: #1f1f1f; overflow: hidden; }
        #box { width: 100%; height: 100%; }
      </style>
      <div id="box"></div>
      <script>
        window.HOST = "${HOST}";
        window.FILE_HOST = "${FILE_HOST}";
      </script>
      ${processedCode}`;
  }

  let processedCode = v;
  const importMapMatch = v.match(
    /<script type=["']importmap["']>([\s\S]*?)<\/script>/i,
  );

  if (importMapMatch) {
    let importMapContent = importMapMatch[1];
    importMapContent = importMapContent.replace(
      /"three":\s*"[^"]*"/g,
      `"three": "${FILE_HOST}libs/threejs/build/three.module.js"`,
    );
    importMapContent = importMapContent.replace(
      /"three\/addons\/":\s*"[^"]*"/g,
      `"three/addons/": "${FILE_HOST}libs/threejs/examples/jsm/"`,
    );
    processedCode = v.replace(
      /<script type=["']importmap["']>[\s\S]*?<\/script>/i,
      `<script type="importmap">${importMapContent}</script>`,
    );
  } else {
    processedCode = `
      <script type="importmap">
        {
          "imports": {
            "three": "${FILE_HOST}libs/threejs/build/three.module.js",
            "three/addons/": "${FILE_HOST}libs/threejs/examples/jsm/"
          }
        }
      </script>
      ${v}`;
  }

  return `
    <script>
      window.HOST = "${HOST}";
      window.FILE_HOST = "${FILE_HOST}";
    </script>
    ${processedCode}`;
};