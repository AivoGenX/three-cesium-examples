import cesiumExamples from "./cesium-examples.js";
import threeExamples from "./three-examples.js";
import webglGpuExamples from "./webgl-gpu-examples.js";
import githubExamples from "./github-examples.js";


// import threeTutorial from "./three-tutorial.js";
// import threeSymbol from "./three-symbol.js";
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

// 定义网站相关 URL
window.__SITE_URLS__ = {
  gitee: 'https://gitee.com/giser2017/3d-lab-demos',
  github: 'https://github.com/AivoGenX/3d-lab-demos',
  web: 'https://threelab.cn/'
};

/* 依赖注入 */
window.GET_SCRIPT = (v, t) => {
  let scriptContent = ``; 
  if (t === "Cesium.js案例") {
    scriptContent = `
    <link rel="stylesheet" href= "${HOST}js/cesium/style.css">
 <script type="importmap">
    {
        "imports": {
            "cesium": "${HOST}js/cesium/Cesium.js",
            "dat.gui":"${HOST}js/dat.gui.module.js"
        }
    }
 <\/script>
      <style>
        body {
          margin: 0;
          padding: 1px;
          box-sizing: border-box;
          background-color: #1f1f1f;
          overflow: hidden;
        }
        #box {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="box"></div>
      <script type="module"> 
        ${v}
      </script>`;
  } else {
    scriptContent = `
      <link rel="stylesheet" type="text/css" href="${HOST}css/threelab.css" /> 
      ${v}`;
  }

  return scriptContent;
};
