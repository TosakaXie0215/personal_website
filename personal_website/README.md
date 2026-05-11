# 去远方的人

一个中文旅行照片个人网站。第一版使用本地占位图，后续可以把真实照片替换到 `public/photos/`，再更新 `src/data/trips.js` 里的图片路径和文案。

## 使用

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 内容维护

- 旅行条目：编辑 `src/data/trips.js` 的 `journeys`。
- 精选短记：编辑 `src/data/trips.js` 的 `stories`。
- 联系方式：编辑 `src/data/trips.js` 的 `profile`。
- 照片资源：把同名图片放入 `public/photos/`，或修改数据文件中的 `image` 路径。
