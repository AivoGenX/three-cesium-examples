# 贡献指南

欢迎贡献代码！以下是参与本项目的指南。

## 🌟 如何贡献

### 1. Fork 项目

点击 GitHub 页面右上角的 **Fork** 按钮，将项目复制到您的仓库。

### 2. 克隆仓库

```bash
git clone https://github.com/your-username/three-lab-demos.git
cd three-lab-demos
```

### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
```

### 4. 开发和测试

完成您的修改后，请确保代码符合规范：

- 确保代码格式正确
- 添加必要的注释
- 测试所有功能正常工作

### 5. 提交代码

```bash
git add .
git commit -m "feat: 添加新功能描述"
git push origin feature/your-feature-name
```

### 6. 创建 Pull Request

在 GitHub 上创建 Pull Request，描述您的修改内容。

## 📋 代码规范

### JavaScript/TypeScript

- 使用 2 空格缩进
- 使用单引号
- 使用 `const`/`let` 而非 `var`
- 函数和变量使用驼峰命名
- 类名使用 PascalCase

### 提交信息规范

```
类型: 描述

详细说明（可选）
```

**类型说明：**
- `feat` - 新功能
- `fix` - 修复 bug
- `docs` - 文档更新
- `style` - 代码格式（不影响逻辑）
- `refactor` - 重构代码
- `test` - 测试相关
- `chore` - 构建/工具相关

## 📦 案例提交规范

### 文件结构

```
threeExamples/
└── category/
    ├── example.html    # 案例页面
    └── example.jpg     # 预览图片（4KB以内）
```

### 配置格式

在 `config/three-examples.json` 或 `config/cesium-examples.json` 中添加：

```json
{
    "id": "unique-id",
    "name": "案例名称",
    "author": "您的作者ID",
    "codeUrl": "/threeExamples/category/example.html",
    "image": "/threeExamples/category/example.jpg",
    "meta": {
        "title": "页面标题",
        "keywords": "关键字",
        "description": "描述信息"
    }
}
```

### 作者信息

在 `config/author.js` 中添加您的信息：

```js
{
    id: 'your-id',
    name: '您的名字',
    avatar: '头像URL',
    github: 'GitHub链接',
    description: '简介'
}
```

## 🤝 社区交流

- QQ: 2945853209
- QQ群: 131995948

## 📄 许可证

本项目采用 MIT 许可证，贡献的代码将遵循相同许可证。

---

# Contributing Guide

Welcome to contribute! Here are the guidelines for participating in this project.

## 🌟 How to Contribute

### 1. Fork the Project

Click the **Fork** button in the upper right corner of the GitHub page.

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/three-lab-demos.git
cd three-lab-demos
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Develop and Test

After completing your changes, ensure:
- Code follows the style guide
- All tests pass

### 5. Commit and Push

```bash
git add .
git commit -m "feat: description"
git push origin feature/your-feature-name
```

### 6. Create Pull Request

Create a PR on GitHub with a description of your changes.

## 📋 Code Guidelines

### JavaScript/TypeScript

- 2 spaces indentation
- Single quotes
- Use `const`/`let` instead of `var`
- CamelCase for functions and variables
- PascalCase for classes

### Commit Message Format

```
type: description

Detailed explanation (optional)
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code formatting
- `refactor` - Code refactoring
- `test` - Testing
- `chore` - Build/tooling

## 📦 Case Submission Guidelines

### File Structure

```
threeExamples/
└── category/
    ├── example.html
    └── example.jpg (under 4KB)
```

### Configuration Format

Add to `config/three-examples.json` or `config/cesium-examples.json`:

```json
{
    "id": "unique-id",
    "name": "Example Name",
    "author": "your-id",
    "codeUrl": "/threeExamples/category/example.html",
    "image": "/threeExamples/category/example.jpg",
    "meta": {
        "title": "Page Title",
        "keywords": "keywords",
        "description": "description"
    }
}
```

## 📄 License

This project is licensed under MIT License.