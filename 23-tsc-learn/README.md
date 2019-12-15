##### 工具一： 自动运行ts文件工具 ts-node

地址： https://github.com/TypeStrong/ts-node

```
# Locally in your project.
npm install -D ts-node
npm install -D typescript

# Or globally with TypeScript.
npm install -g ts-node
npm install -g typescript
```

## Usage

```
# Execute a script as `node` + `tsc`.
ts-node script.ts

# Starts a TypeScript REPL.
ts-node

# Execute code with TypeScript.
ts-node -e 'console.log("Hello, world!")'

# Execute, and print, code with TypeScript.
ts-node -p -e '"Hello, world!"'

# Pipe scripts to execute with TypeScript.
echo "console.log('Hello, world!')" | ts-node

命令：
```

 ts-node .\index.ts   可直接运行typeScript文件，无需生成index.js再运行node index.js



##### 工具二：监控改变，自动重启服务 nodemon

https://github.com/remy/nodemon

```
npm install -g nodemon

运行方式：nodemon + ts-node
```

nodemon --exec ts-node .\index.ts



<https://www.jianshu.com/p/7571a866a047>

### 为什么要用nodemon

实际工作中，当我们改修项目的配置文件时，需要重新启动服务。由于用习惯了webpack的hot热重载，因此也希望再修改config配置文件时项目能够自动重启，于是这里用到了nodemon

#### 项目中开发环境安装

```undefined
npm install --save-dev nodemon
```

example:

```bash
 "scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --config webpack.dev.conf.js  ",
    "startdev": "nodemon --watch webpack.dev.conf.js --exec  npm run dev "
  },
```

启动

```undefined
npm run startdev
```

输出

```css
[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: webpack.dev.conf.js
[nodemon] starting `npm run dev`
```

此时修改文件webpack.dev.conf.js，会运行npm run dev命令
 nodemon默认监听项目目录内的所有文件变动
 常用配置：

```bash
--watch 监听哪些文件的变化，当变化的时候自动重启
--exec 配置运行命令
```

node服务器app.js自动重启:

```bash
  "scripts": {
    "dev": "nodemon  app.js "
  },
```

输出

```css
[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
```

监听项目内所有文件变动，自动重启运行命令node app.js  这里看到其实nodemon也是调用node命令

作者：忍不住的k

链接：https://www.jianshu.com/p/7571a866a047

来源：简书

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。