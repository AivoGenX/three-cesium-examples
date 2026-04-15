let HOST = window.origin + window.location.pathname

HOST = HOST.replace(/\/index.html$/, '/')

// const FILE_HOST = 'https://www.threelab.cn/cdn/' // 文件资源服务器
// const FILE_HOST = 'https://AivoGenX.github.io/web3d-file-server/' // 文件资源服务器 
const FILE_HOST = window.location.origin + '/threeExamples/' // 本地文件资源路径

export { HOST, FILE_HOST }

/* 注 部署可将 资源全部下载 然后配置成自己的资源地址即可 */