# 部署与本地调试指南（Node.js → 本地预览 → GitHub Pages）

## 0. 环境准备：安装 Node.js
- macOS（推荐）：`brew install node`
- Windows：从 https://nodejs.org 下载 LTS 安装包，或 `winget install OpenJS.NodeJS.LTS`
- 验证：`node -v` 和 `npm -v` 能输出版本号

## 1. 克隆或进入项目
```bash
cd /Users/hahadong/Desktop/快递车网站   # 改成你的路径
# 如果是新机器，从仓库克隆：
# git clone git@github.com:FreecityDong/deliverbot.git
# cd deliverbot
```

## 2. 安装依赖
```bash
npm install
```

## 3. 本地开发/预览
- 开发模式（热更新）：`npm run dev -- --host --port 3000`
  - 浏览器访问 http://localhost:3000
- 生产构建验证：`npm run build`
- 构建后预览（可选）：`npm run preview -- --host --port 4173`

## 4. 关键配置（已在仓库中）
- `vite.config.ts` 已设置 `base: '/deliverbot/'`，用于 GitHub Pages 子路径。
- `package.json` 脚本：
  - `dev`: 本地开发
  - `build`: 生产构建
  - `deploy`: `npm run build && gh-pages -d build`（推送构建产物到 gh-pages 分支）
- `.gitignore` 已忽略 `node_modules`、`build/`

## 5. Git 仓库与远程
- 查看远程：`git remote -v`
- 推荐使用 SSH 远程（避免 HTTPS 代理问题）：  
  `git remote set-url origin git@github.com:FreecityDong/deliverbot.git`
- 测试连通：`ssh -T git@github.com`

## 6. 部署到 GitHub Pages（gh-pages 分支）
1) 生产构建：`npm run build`
2) 部署：`npm run deploy`
   - 该命令会将 `build/` 推送到远程的 `gh-pages` 分支（默认使用当前 origin 地址）
3) GitHub 仓库 Settings → Pages：
   - Source 选择 `gh-pages` 分支，保存
4) 等待几分钟，访问：https://freecitydong.github.io/deliverbot/

### 如果需要指定仓库地址（可选）
```bash
GH_PAGES_REPO=git@github.com:FreecityDong/deliverbot.git npm run deploy
```

## 7. 常见问题
- 部署后页面空白：确认 `vite.config.ts` 的 `base` 与仓库名一致（`/deliverbot/`），重新 `npm run build` 和 `npm run deploy`。
- 推送失败/connection reset：使用 SSH 远程；或检查代理、防火墙。  
  可查看详细日志：`GIT_CURL_VERBOSE=1 npm run deploy`
- 端口占用：开发预览时加 `--port 3001` 等参数。

## 8. 最简操作串
```bash
npm install
npm run build
npm run deploy
# GitHub Pages 设置好 gh-pages 分支后，访问实际地址
```
