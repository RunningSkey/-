module.exports={
  publicPath: './',//解决app打包后白屏
  chainWebpack:config=>{
    config.plugins.delete("prefetch") //取消预加载
  }

}