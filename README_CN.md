[English](README.md) | [中文](README_CN.md)

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=32&duration=3000&pause=1000&color=EC4899&center=true&vCenter=true&width=800&height=100&lines=ChronoCalc;%E5%B7%A5%E6%97%B6%E8%AE%A1%E7%AE%97%E5%99%A8;%E5%B0%8F%E6%97%B6%E5%88%86%E9%92%9F%E8%BF%BD%E8%B8%AA" alt="ChronoCalc"/>
</div>

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![毛玻璃风格](https://img.shields.io/badge/设计-毛玻璃-FF1493?style=flat-square)](https://time.bojiang.org)
[![在线演示](https://img.shields.io/badge/在线-time.bojiang.org-red?style=flat-square)](https://time.bojiang.org)

**优雅毛玻璃设计的工时计算器 · 时间加减 · 结果继承 · 历史记录**

</div>

---

## 项目背景

我叫**伯江**（Bojiang），追踪各项目和自由职业任务的工时。传统计时器很笨重，易被遗忘。我需要一个能：

- **即时加减**小时和分钟
- **继承结果**用于连续时间追踪
- **记住历史**的所有计算
- **外观精美**，采用现代UI设计
- **完全离线**在浏览器中运行

**ChronoCalc** 正是我的答案——一个真正**想被使用**的工时计算器。

---

## 🎯 主要功能

### 核心功能

| 功能 | 详情 |
|------|------|
| ⏰ **时间输入** | 小时+分钟，自然语言解析 |
| ➕ **加法** | 合并多个时间条目 |
| ➖ **减法** | 从总计中扣除小时数 |
| 📊 **结果显示** | 清晰格式 (HH:MM 或 H:MM) |
| 🔄 **结果继承** | 使用前一个结果作为新输入 |
| 📜 **历史追踪** | 所有过去的计算可见 |
| 🗑️ **清除条目** | 一键重置 |

### 智能功能

| 功能 | 好处 |
|------|------|
| 💫 **毛玻璃UI** | 现代、磨砂玻璃效果 |
| 🌈 **渐变动画** | 顺畅、吸睛的过渡 |
| ⌨️ **快速输入** | 输入时间，按Enter |
| 📋 **复制到剪贴板** | 一键分享结果 |
| 💾 **持久存储** | 浏览器localStorage保存历史 |
| 📱 **移动优化** | 完美适配手机、平板、桌面 |

---

## 🌐 在线演示

访问 **[time.bojiang.org](https://time.bojiang.org)** 立即使用。

---

## 📸 截图

应用配有漂亮的预览截图：

```
assets/screenshots/
├── desktop-landing.png     # 完整桌面视图
├── desktop-workflow.png    # 计算中期截图
└── mobile-view.png         # 移动响应视图
```

查看这些文件了解毛玻璃设计的实际效果。

---

## 🚀 快速开始

### 前置条件
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 无依赖，无需服务器！

### 安装

```bash
# 克隆仓库
git clone https://github.com/hakupao/time_calculator_web_app.git
cd time_calculator_web_app

# 在浏览器中打开
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

---

## 📂 项目结构

```
time_calculator_web_app/
├── index.html              # 主文件
├── styles.css              # 毛玻璃样式
├── app.js                  # 核心逻辑和事件处理
└── assets/
    └── screenshots/
        ├── desktop-landing.png
        ├── desktop-workflow.png
        └── mobile-view.png
```

### 关键文件

- **index.html**: 最小化的语义HTML结构
- **styles.css**: 毛玻璃、渐变、动画、Outfit字体
- **app.js**: 时间解析、计算逻辑、历史管理

---

## 💡 使用方法

### 基本工作流

1. **输入第一个时间**：输入 `2:30`（或 `2小时30分`）
2. **选择操作**：点击 `+` 或 `-`
3. **输入第二个时间**：输入 `1:15`
4. **获取结果**：立即看到 `3:45`
5. **继续**：点击结果用作新输入

### 高级功能

#### 结果继承

```
第1步: 5:00 + 2:30 = 7:30
第2步: 7:30 + 1:00 = 8:30  ← 点击结果继承
第3步: 8:30 - 0:45 = 7:45
```

#### 时间格式支持

所有格式都支持：
- `1:30` (小时:分钟)
- `90` (仅分钟)
- `1小时 30分` (自然语言)
- `1 hour 30 minutes` (英文)

#### 历史追踪

每个计算都被保存：
```
[10:00] + [5:00] = 15:00
[15:00] - [2:30] = 12:30
[12:30] + [0:45] = 13:15
```

---

## 🎨 设计理念

### 毛玻璃效果

UI使用现代毛玻璃：

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.25);
border: 1px solid rgba(255, 255, 255, 0.5);
```

### 颜色渐变动画

顺畅的渐变过渡：

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
animation: gradient-shift 6s ease infinite;
```

### 排版

使用 **Outfit** 字体打造现代易读界面：

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700" rel="stylesheet">
```

---

## 🔧 技术栈

| 组件 | 技术 |
|------|------|
| 📄 **标记** | HTML5语义结构 |
| 🎨 **样式** | CSS3 (毛玻璃、grid、动画) |
| ⚙️ **逻辑** | 原生JavaScript (ES6+) |
| 🔤 **字体** | Google Fonts (Outfit) |
| 💾 **存储** | 浏览器localStorage |
| 🌐 **托管** | 静态文件服务 |

---

## 📱 响应式设计

### 桌面视图
- 全宽计算器，大输入字段
- 宽敞布局，清晰视觉层次
- 键盘友好的快捷方式

### 平板视图
- 居中计算器面板
- 触摸优化按钮大小
- 竖屏/横屏方向支持

### 移动视图
- 单列布局
- 拇指友好的按钮位置
- 单手操作优化
- 大型易读文本

---

## ⚙️ 配置

### 自定义颜色

编辑 `styles.css` 渐变颜色：

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #ec4899;
}
```

### 修改字体

在 `index.html` 中修改为其他字体：

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

### 调整模糊效果

在 `styles.css` 中修改毛玻璃背景模糊：

```css
.calculator {
  backdrop-filter: blur(20px);  /* 从10px增加 */
}
```

---

## 💾 数据和隐私

### 浏览器存储

所有计算存储在本地：

```javascript
// 存储在浏览器的localStorage中
localStorage.setItem('timeHistory', JSON.stringify(history));
```

**隐私：** 无数据上传到服务器。一切都留在你的设备上。

### 清除数据

用户可随时清除历史：
- 点击"清除历史"按钮
- localStorage被清空
- 计算重新开始

---

## 📊 使用案例

### 案例1：自由职业项目追踪

**项目：网站重新设计**
```
第1天: 8:30 (上午设计)
第2天: 6:45 (代码)
第3天: 4:15 (测试和修复)
总计: 8:30 + 6:45 + 4:15 = 19:30 小时
```

### 案例2：团队时间分配

**团队会议后备：**
```
会议1: 2:00 (需求)
会议2: 1:30 (设计评审)
编码: 3:45 (实现)
总计: 2:00 + 1:30 + 3:45 = 7:15 小时
```

### 案例3：运动时长

**每周训练：**
```
星期一: 1:30 (健身房)
星期三: 0:45 (有氧)
星期五: 1:15 (力量)
总计: 1:30 + 0:45 + 1:15 = 3:30 小时
```

---

## 🚨 已知限制

| 限制 | 原因 | 解决方案 |
|------|------|--------|
| 无时区处理 | 为了简化UX | 用于相对时间，非绝对时间 |
| 限于24-59小时 | 设计假设 | 手动按天分割 |
| 无循环计算 | 单一目的工具 | 适合按需使用 |
| 无导出为CSV | 隐私优先 | 手动复制结果 |

---

## 🤝 贡献

发现bug？想添加如时间到期倒计时这样的功能？

1. Fork本仓库
2. 创建功能分支
3. 提交改进
4. 开启Pull Request

---

## 📝 许可证

MIT许可证 - 自由用于个人和商业项目。

---

## 🙋 常见问题

**Q: 为什么选毛玻璃风格？**
A: 现代、优美的美学，感觉当代但不过度复杂。同时也是2024-2025 UI设计的流行趋势。

**Q: 能离线使用吗？**
A: 可以！完全离线可用。所有操作在浏览器中进行。

**Q: 能导出历史吗？**
A: 目前手动复制粘贴。未来版本可能添加CSV/JSON导出。

**Q: 支持哪些浏览器？**
A: 所有现代浏览器（Chrome、Firefox、Safari、Edge）。需要CSS Grid和localStorage支持。

**Q: 能嵌入到我的网站吗？**
A: 不能直接，但可以fork后在你自己的域名上托管。

---

## 📞 联系方式

- 🌐 网站: [bojiang.org](https://bojiang.org)
- 📧 邮箱: cnhakupao@yahoo.co.jp
- 🐙 GitHub: [@hakupao](https://github.com/hakupao)
- 🔗 在线: [time.bojiang.org](https://time.bojiang.org)

---

<div align="center">

**优雅地追踪时间，轻松地计算 ⏰**

在横滨用❤️制作

</div>
