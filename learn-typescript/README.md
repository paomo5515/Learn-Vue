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
```

### TypeScript 会在哪里查找我们的类型声明？
(1).内置类型声明 
  内置类声明是 TypeScript 自带的、帮助我们内置了 JavaScript运行时的一些标准化 API 的声明文件；
  比如Math、Date等内置类型，也包括DOM API，比如 Window、Document等；
(2).外部定义类型声明
  外部类型声明通常是我们使用一些库（比如第三方库）时，需要的要一些类型声明。
  这些库通常有两种类型声明方式：
    方式一：在自己库中进行类型声明（编写 .d.ts），比如 axios；
    方式二：通过社区的一个公有库 DefinitelyTyped 存放类型声明文件
    该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
(3).自己定义类型声明