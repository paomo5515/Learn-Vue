# learn-TypeScript

## Project setup
```
npm install
```

### 环境安装
```
1.npm i typescript -g
2.查看版本 tsc -v
3.tsc .\01_Hello_TypeScript.ts  

```

### 运行环境一(node)
```
1.npm i ts-node -g
2.npm i tslib @types/node -g
3.ts-node .\02_TypeScript的数据类型.ts
```

### 运行环境二(webpack)
```
1.进入到文件夹 npm init
2.npm i webpack webpack-cli -D
3.npm install --save-dev typescript ts-loader
4.tsc --init
5. npm i webpack-dev-server -D
6.npm i html-webpack-plugin -D