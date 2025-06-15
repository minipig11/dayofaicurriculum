import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//插件和element-plus
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [
	  	vue(),
	  	AutoImport({
  			imports:['vue','vue-router']//自动导入vue和vue-router相关函数
  		}),
  	],
  	server:{
      proxy:{
        '/api':'http://testapi.xuexiluxian.cn'
      }
    }
})
