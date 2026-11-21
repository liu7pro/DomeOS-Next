# DomeOS-Next 官网

DomeOS-Next 是 DomeOS Team 打造的新一代 Windows 精简方案，在保留完整功能的前提下降低系统占用。

本仓库为 DomeOS-Next 项目官网页面，使用纯静态 HTML / CSS / JavaScript 构建，部署于 GitHub Pages。

- 线上地址：https://liu7pro.github.io/DomeOS-Next/
- 团队官网：https://liu7pro.github.io/DomeOS-Team/

## 目录结构

```
.
├── index.html          首页
├── 404.html            404 页面
├── .nojekyll           关闭 Jekyll 处理
└── assets/
    ├── style.css       公共样式
    ├── theme.css       站点配色
    ├── main.js         交互与入场动画
    ├── logo.svg        站点图标
    └── fireflyos.svg   FireflyOS 图标
```

## 本地预览

在仓库根目录启动任意静态服务器，例如：

```powershell
python -m http.server 8080
```

然后访问 http://localhost:8080/。

## 维护

- 版本与获取方式以团队 QQ 群内发布的信息为准。
- 页面导航、页脚与产品互链需要与 DomeOS Team、FireflyOS 站点保持一致。

© 2026 DomeOS Team
