# 纸鹿的个人简历

[![在线预览](https://img.shields.io/badge/在线预览-cv.zhilu.cyou-blue)](https://cv.zhilu.cyou)

在我完成 Word 版简历后，KazariEX 推荐我参考他的 [resume.bikari.top](https://github.com/KazariEX/resume.bikari.top) 项目制作网页版简历，他简历中的一部分排版灵感来源于我的简历。

## 项目结构

```sh
cv.zhilu.cyou
├── assets              # 静态资源
│   └── main.scss       # 全局样式文件 (Sass)
├── components          # Vue组件
│   ├── InfoLi.vue      # 列表项组件
│   ├── InfoLink.vue    # 链接组件
│   ├── InfoSection.vue # 信息区块组件
│   └── Project.vue     # 项目展示组件
├── utils               # 工具函数
│   ├── icon.ts         # 图标映射配置
│   └── link.ts         # 链接处理逻辑
├── .env                # 本地环境变量配置
├── app.vue             # 主页面入口
└── nuxt.config.js      # Nuxt应用配置
```

## 技术栈

- 框架: [Nuxt 3](https://nuxt.com) (Vue 3)
- 样式: [SCSS](https://sass-lang.com/) + [UnoCSS](https://unocss.dev/)
- 图标: [Iconify](https://iconify.design/) + [Nuxt Icon](https://nuxt.com/modules/icon)

## 开发指南

### 环境准备

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm run dev
```

### 添加图标

1. 在 [Yesicon](https://yesicon.app/) 中搜索所需图标
2. 推荐安装 [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) VS Code插件
3. 使用方式：
   ```vue
   <NuxtIcon name="图标集合:图标名" />
   ```
4. 技术栈图标需在 `utils/icon.ts` 中添加映射关系

### 配置个人信息

在项目根目录创建 `.env` 文件：

```ini
# .env
NAME="你的名字"
PHONE="你的电话"
```

该文件会被 `.gitignore` 排除，不会提交到仓库，因此只会在本地生效。

## 导出 PDF

1. 启动开发服务器：`pnpm run dev`
2. 浏览器访问 `http://localhost:3000`
3. 按 `Ctrl + P` 打开打印界面
4. 设置建议：
   - 打印机：另存为PDF
   - 布局：纵向
   - 边距：无
   - 缩放：100%

## 部署

项目支持多种部署方式：

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com/)
- 静态导出：`pnpm run generate`

## 贡献

欢迎提交 Issue 或 PR，请确保代码风格一致。

## 许可

[MIT License](LICENSE)
