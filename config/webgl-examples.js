import { HOST, FILE_HOST } from './host.js';
export default [
    {
        pid: 'base',
        name: '基础功能',
        children: [
            {
                id: 'Triangle',
                name: '三角形',
                author: 'giser2017',
                codeUrl: HOST + '/webglExamples/base/Triangle.html',
                image: HOST + '/webglExamples/base/Triangle.png', 
            },
            {
                id: 'rectangle',
                name: '两个三角形绘制矩形',
                author: 'giser2017',
                codeUrl: HOST + '/webglExamples/base/rectangle.html',
                image: HOST + '/webglExamples/base/rectangle.png', 
            },
            {
                id: 'IndexDrawingRectangle',
                name: '索引绘制矩形',
                author: 'giser2017',
                codeUrl: HOST + '/webglExamples/base/IndexDrawingRectangle.html',
                image: HOST + '/webglExamples/base/IndexDrawingRectangle.png', 
            }, 
            {
                id: 'Transformation',
                name: '变换',
                author: 'giser2017',
                codeUrl: HOST + '/webglExamples/base/Transformation.html',
                image: HOST + '/webglExamples/base/Transformation.png', 
            }
        ]
    },
    
]