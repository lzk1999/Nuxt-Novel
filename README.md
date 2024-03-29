# 项目介绍

Nuxt-Novel(Nuxt版笔趣阁)是一个由第三方Json构建的一个小说阅读网站，目前只有一个小说源，后续会陆续添加更多的小说源。

无需数据库，无需后端，只需要一个静态服务器即可部署。

## 开发原因

最近在用Nuxt3开发自己的Blog系统，开发完之后无意中在Github看到了开源阅读项目，

发现了异次元书源，想着能不能用Nuxt3开发一个小说阅读网站，于是就有了这个项目。纯练手Demo。

## 技术栈

采用Nuxt3最新的技术栈，包括：tailwindcss、vite、composition-api、typescript、eslint、prettier、husky、lint-staged等。

## 后续增加功能

    1.完善所有功能

    2.增加书源

    3.将书源抽离出来，方便用户自定义书源，并使用Go语言构建

## 项目截图

![1](https://img.smalljp.com/i/2023/02/08/psevpw.webp)

![2](https://img.smalljp.com/i/2023/02/08/pseyj6.webp)


## 免责声明

本项目仅供学习交流使用，不得用于商业用途，如有侵权，请联系作者删除。

本项目第三方Json均来自 异次元书源（网络），如有侵权，请联系作者删除。

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
