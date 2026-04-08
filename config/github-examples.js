import { HOST, FILE_HOST } from "./host.js";

export default [
     {
        pid: 'qualityEngine',
        name: '优质引擎',
        name_en: 'Quality Engines',
        children: [
            {
                id: 'threejs',
                author: 'mrdoob',
                name: 'Three.js',
                name_en: 'Three.js',
                githubUrl: 'https://github.com/mrdoob/three.js',
                openUrl: 'https://threejs.org/',
                image: HOST + 'threeExamples/openSource/three.png'
            },
            {
                id: 'cesium',
                author: 'CesiumGS',
                name: 'Cesium',
                name_en: 'Cesium',
                githubUrl: 'https://github.com/CesiumGS/cesium',
                openUrl: 'https://cesium.com/',
                image: HOST + 'threeExamples/openSource/sandcastle.png'
            },
          {
                id: 'iTowns',
                name: 'iTowns',
                tag: 'Tiles',
                author: 'iTowns',
                githubUrl: 'https://github.com/iTowns/itowns',
                openUrl: 'https://www.itowns-project.org/',
                image: HOST + 'threeExamples/openSource/iTowns.jpg'
            }, 
            {
                id: 'maptalks_three',
                githubUrl: 'https://github.com/maptalks/maptalks.three',
                openUrl: 'https://maptalks.org/maptalks.three/docs/dist/',
                name: 'maptalks',
                image: HOST + 'threeExamples/openSource/maptalks.jpg'
            },
            {
                id: 'mapbox',
                author: 'mapbox',
                name: 'Mapbox GL JS',
                name_en: 'Mapbox GL JS',
                githubUrl: 'https://github.com/mapbox/mapbox-gl-js',
                openUrl: 'https://www.mapbox.com/mapbox-gljs',
                image: HOST + 'threeExamples/openSource/mapbox.png'
            },
            {
                id: '3dtilesrendererjs',
                author: 'NASA-AMMOS',
                name: '3D Tiles Renderer',
                name_en: '3D Tiles Renderer',
                githubUrl: 'https://github.com/NASA-AMMOS/3DTilesRendererJS',
                openUrl: 'https://nasa-ammos.github.io/3DTilesRendererJS/',
                image: HOST + 'threeExamples/openSource/3dtiles.jpg'
            }
        ]
    },
    {
        pid: 'topNavigation',
        name: '精选导航',
        children: [
            {
                id: 'codePen',
                name: 'CodePen 社区',
                author: 'Threejs',
                openUrl: 'https://codepen.io/search/pens?q=three+js',
                image: FILE_HOST + 'images/codepen.jpg'
            },

            {
                id: 'codeSandbox',
                name: 'CodeSandbox 社区',
                author: 'Threejs',
                openUrl: 'https://codesandbox.io/search?query=three',
                image: FILE_HOST + 'images/sandbox.jpg'
            },

            {
                id: 'tympanus',
                name: 'Codrops 社区', 
                author: 'Threejs',
                openUrl: 'https://tympanus.net/codrops/demos/?tag=three-js',
                image: FILE_HOST + 'images/tympanus.jpg'
            },
        ]
    },
    {
        pid: 'framework',
        name: '相关框架',
        name_en: 'Frame Work',
        children: [
           
            {
                id: 'kokomijs',
                name: 'kokomi.js',
                author: 'alphardex',
                githubUrl: 'https://github.com/alphardex/kokomi.js',
                openUrl: 'https://kokomi-js.netlify.app/',
                image: HOST + 'threeExamples/openSource/kokomi.jpg'
            },
            {
                id: 'troisjs',
                openUrl: 'https://troisjs.github.io/',
                githubUrl: 'https://github.com/troisjs/trois',
                author: 'AUTO',
                name: 'trois.js',
                image: HOST + 'threeExamples/openSource/trois.jpg',
            }
        ]
    },
    {
        pid: 'openSourceStation',
        name: '资源链接',
        name_en: 'Resource Link',
        children: [
            {
                id: 'sketchThree',
                author: 'ykob',
                name: 'Three特效',
                openUrl: 'https://ykob.github.io/sketch-threejs/',
                githubUrl: 'https://github.com/ykob/sketch-threejs',
                image: FILE_HOST + 'images/sketchThree.jpg'
            },

            {
                id: 'dragonir',
                author: 'dragonir',
                name: 'Three 案例',
                name_en: 'Three Examples',
                openUrl: 'https://dragonir.github.io/3d',
                githubUrl: 'https://github.com/dragonir/3d',
                image: FILE_HOST + 'images/dragonir.jpg'
            },

            {
                id: 'journey',
                author: 'journey',
                name: 'ThreeJourney', 
                openUrl: 'https://journey.pmnd.rs/',
                githubUrl: 'https://github.com/pmndrs/threejs-journey',
                image: HOST + 'threeExamples/openSource/threejs-journey.jpg'
            },

            {
                id: 'wuyifan0203',
                author: 'wuyifan0203',
                name: 'Three源码案例', 
                openUrl: 'https://wuyifan0203.github.io/threejs-demo',
                githubUrl: 'https://github.com/wuyifan0203/threejs-demo',
                image: FILE_HOST + 'images/wuyifan0203.jpg'
            },
            {
                id: 'alwxkxk',
                author: 'alwxkxk',
                name: 'Three案例', 
                openUrl: 'https://alwxkxk.github.io/threejs-example/',
                githubUrl: 'https://github.com/alwxkxk/threejs-example',
                image: FILE_HOST + 'images/alwxkxk.jpg'
            },

            {
                id: 'sxguojf',
                author: 'sxguojf',
                name: 'Three结合地图瓦片', 
                openUrl: 'https://sxguojf.github.io/three-tile-example/',
                githubUrl: 'https://github.com/sxguojf/three-tile',
                image: FILE_HOST + 'images/wangpengfei.jpg'
            },

            {
                id: 'bulang_cesium',
                author: 'tingyuxuan2302',
                name: 'Cesium案例', 
                openUrl: 'https://tingyuxuan2302.github.io/cesium-vue3-vite/',
                githubUrl: 'https://github.com/tingyuxuan2302/cesium-vue3-vite',
                image: HOST + 'threeExamples/openSource/bulang_cesium.jpg'
            },

            {
                id: 'zhengjie9510',
                author: 'zhengjie9510',
                name: 'Cesium案例', 
                openUrl: 'https://zhengjie9510.github.io/webgis-demo',
                githubUrl: 'https://github.com/zhengjie9510/webgis-demo',
                image: FILE_HOST + 'images/zhengjie9510.jpg'
            },

            {
                id: 'quyinggang',
                name: 'Three学习案例', 
                author: 'quyinggang',
                githubUrl: 'https://github.com/quyinggang/three3d',
                openUrl: 'https://quyinggang.github.io/three3d/',
                image: FILE_HOST + 'images/quyinggang.jpg'
            },
            {
                id: 'bosombaby',
                author: 'bosombaby',
                name: 'Three 案例',
                name_en: 'Three Examples',
                openUrl: 'https://product.vrteam.top/',
                githubUrl: 'https://github.com/bosombaby/web3d-product',
                image: FILE_HOST + 'images/bosombaby.jpg'
            },
            {
                id: 'pengfeiw',
                author: 'pengfeiw',
                name: '3d 案例',
                name_en: '3D Examples',
                githubUrl: 'https://github.com/pengfeiw/threejs-case',
                openUrl: 'https://pengfeiw.github.io/minicode/',
                image: HOST + 'threeExamples/openSource/wangpengfei.jpg'
            },

            {
                id: 'lpya',
                author: 'lpya',
                name: 'vue Three案例',
                name_en: 'Vue Three',
                openUrl: 'https://lpya.github.io/vue2-threejs-sefficacy',
                githubUrl: 'https://github.com/lpya/vue2-threejs-sefficacy',
                image: FILE_HOST + 'images/lpya.jpg'
            },
            {
                id: 'boytchev',
                author: 'boytchev',
                name: 'Three案例',
                name_en: 'Three etudes',
                openUrl: 'https://boytchev.github.io/etudes/',
                githubUrl: 'https://github.com/boytchev/etudes',
                image: HOST + 'threeExamples/openSource/etudes.jpg'
            },
            {
                id:'genuary',
                author: 'spite',
                name: 'Genuary 2022',
                githubUrl: 'https://github.com/spite/genuary-2022',
                openUrl: 'https://spite.github.io/genuary-2022/',
                image: HOST + 'threeExamples/openSource/genuary.jpg'
            },
            {
                id: 'lo-th',
                author: 'lo-th',
                name: 'ThreeLab',
                name_en: 'ThreeLab',
                githubUrl: 'https://github.com/lo-th/three.lab',
                openUrl: 'https://lo-th.github.io/three.lab/examples/#webgl_gpgpu_water',
                image: HOST + 'threeExamples/openSource/threelab.jpg'
            }
        ]
    },
   
]
