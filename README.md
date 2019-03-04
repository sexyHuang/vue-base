# vue-base

vue 项目中的个人常用代码插件。

## 模块

1. **api**:基于 axios 打包的网络请求模块
2. **library**:通常模块，包括:  
    基于 vue-router 全局守卫实现的后退页面缓存功能(./template/src/library/goBack.js);
   基于 LocalStorage 实现的前端缓存(./template/src/library/cache)。
3. **router**: vue-router 个人用初始化模块
4. **store**: vuex 个人用初始化模块
5. **jsconfig.json**: ide配置

## 安装

First you need to install @vue/cli globally (follow the instructions here).

Then create a project and add the ant-design-vue plugin:

```
vue create my-app
cd my-app
vue add sexy-base
```
