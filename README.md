# DomeOS-Next 官网

DomeOS-Next 是 DomeOS Team 基于原版 Windows 打造的精简系统：保留驱动、更新与核心组件，只拿走不必要的负担。
站点采用接近 Windows 11 的 Fluent 视觉语言，并支持深色 / 浅色模式。

本仓库为 DomeOS-Next 项目官网页面，使用纯静态 HTML / CSS / JavaScript 构建，部署于 GitHub Pages。

- 线上地址：https://liu7pro.github.io/DomeOS-Next/

## 目录结构

```
.
├── index.html          首页
├── 404.html            404 页面
├── .nojekyll           关闭 Jekyll 处理
└── assets/
    ├── theme.css       深浅色主题令牌
    ├── style.css       站点样式
    ├── main.js         主题切换、导航与入场动画
    ├── logo.svg        站点图标
    └── fireflyos.svg   FireflyOS 图标（系统线互链）
```

## 深浅色模式

- 首次访问跟随系统偏好，之后记住用户选择（`localStorage: dn-theme`）。
- 页面头部内联脚本会在渲染前写入 `data-theme`，避免加载时白屏闪烁。
- 主题按钮位于右上角导航区。

## 本地预览

在仓库根目录启动任意静态服务器，例如：

```powershell
python -m http.server 8080
```

然后访问 http://localhost:8080/。

## 维护

- 版本信息与下载渠道以 DomeOS Team 公布为准。
- 页面导航、页脚与产品互链需要与 DomeOS Team、FireflyOS 站点保持一致。

© 2026 DomeOS Team
