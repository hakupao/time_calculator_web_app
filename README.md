[English](time_calculator_web_app--README.md) | [中文](time_calculator_web_app--README_CN.md)

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=32&duration=3000&pause=1000&color=EC4899&center=true&vCenter=true&width=800&height=100&lines=ChronoCalc;Time+Calculator;Hour+Minute+Tracker" alt="ChronoCalc"/>
</div>

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Glassmorphism](https://img.shields.io/badge/UI-Glassmorphism-FF1493?style=flat-square)](https://time.bojiang.org)
[![Live Demo](https://img.shields.io/badge/Live-time.bojiang.org-red?style=flat-square)](https://time.bojiang.org)

**Track working hours with beautiful glassmorphism design · Add/subtract time · Result inheritance · History tracking**

</div>

---

## About This Project

I'm **Bojiang**, tracking work hours for projects and freelance tasks. Traditional time calculators are clunky and forgettable. I needed something that:

- **Instantly adds/subtracts** hours and minutes
- **Inherits results** for continuous time tracking
- **Remembers history** of all calculations
- **Looks beautiful** with modern UI design
- **Works offline** entirely in the browser

**ChronoCalc** is my answer—a time calculator that actually *wants* to be used.

---

## 🎯 Features

### Core Functionality

| Feature | Details |
|---------|---------|
| ⏰ **Time Input** | Hours + minutes, natural language parsing |
| ➕ **Add Times** | Combine multiple time entries |
| ➖ **Subtract Times** | Deduct hours from totals |
| 📊 **Result Display** | Clear format (HH:MM or H:MM) |
| 🔄 **Result Inheritance** | Use previous result as new input |
| 📜 **History Tracking** | All past calculations visible |
| 🗑️ **Clear Entries** | Reset with one click |

### Smart Features

| Feature | Benefit |
|---------|---------|
| 💫 **Glassmorphism UI** | Modern, frosted glass effect |
| 🌈 **Gradient Animation** | Smooth, eye-catching transitions |
| ⌨️ **Quick Input** | Type times, press Enter |
| 📋 **Copy to Clipboard** | One-click result sharing |
| 💾 **Persistent Storage** | Browser localStorage saves history |
| 📱 **Mobile Optimized** | Perfect for phones, tablets, desktop |

---

## 🌐 Live Demo

Visit **[time.bojiang.org](https://time.bojiang.org)** to use it now.

---

## 📸 Screenshots

The app comes with beautiful preview screenshots:

```
assets/screenshots/
├── desktop-landing.png     # Full desktop view
├── desktop-workflow.png    # Mid-calculation screenshot
└── mobile-view.png         # Mobile responsive view
```

View these to see the glassmorphism design in action.

---

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- No dependencies, no server needed!

### Installation

```bash
# Clone the repository
git clone https://github.com/hakupao/time_calculator_web_app.git
cd time_calculator_web_app

# Open in browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

---

## 📂 Project Structure

```
time_calculator_web_app/
├── index.html              # Main entry point
├── styles.css              # Glassmorphism styling
├── app.js                  # Core logic & event handlers
└── assets/
    └── screenshots/
        ├── desktop-landing.png
        ├── desktop-workflow.png
        └── mobile-view.png
```

### Key Files

- **index.html**: Minimal semantic HTML structure
- **styles.css**: Glassmorphism, gradients, animations, Outfit font
- **app.js**: Time parsing, calculation logic, history management

---

## 💡 How to Use

### Basic Workflow

1. **Enter first time**: Type `2:30` (or `2h 30m`)
2. **Choose operation**: Click `+` or `-`
3. **Enter second time**: Type `1:15`
4. **Get result**: See `3:45` instantly
5. **Continue**: Click result to use it as new input

### Advanced Features

#### Result Inheritance

```
Step 1: 5:00 + 2:30 = 7:30
Step 2: 7:30 + 1:00 = 8:30  ← Click result to inherit
Step 3: 8:30 - 0:45 = 7:45
```

#### Time Format Support

All formats work:
- `1:30` (hours:minutes)
- `90` (minutes only)
- `1h 30m` (natural language)
- `1 hour 30 minutes` (full words)

#### History Tracking

Every calculation is saved:
```
[10:00] + [5:00] = 15:00
[15:00] - [2:30] = 12:30
[12:30] + [0:45] = 13:15
```

---

## 🎨 Design Philosophy

### Glassmorphism Effect

The UI uses modern glassmorphism:

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.25);
border: 1px solid rgba(255, 255, 255, 0.5);
```

### Color Gradient Animation

Smooth gradient transitions:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
animation: gradient-shift 6s ease infinite;
```

### Typography

Uses **Outfit** font for modern, readable interface:

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700" rel="stylesheet">
```

---

## 🔧 Technology Stack

| Component | Technology |
|-----------|------------|
| 📄 **Markup** | HTML5 semantic structure |
| 🎨 **Styling** | CSS3 (glassmorphism, grid, animations) |
| ⚙️ **Logic** | Vanilla JavaScript (ES6+) |
| 🔤 **Font** | Google Fonts (Outfit) |
| 💾 **Storage** | Browser localStorage |
| 🌐 **Hosting** | Static file service |

---

## 📱 Responsive Design

### Desktop View
- Full-width calculator with large input fields
- Spacious layout with clear visual hierarchy
- Keyboard-friendly shortcuts

### Tablet View
- Centered calculator panel
- Touch-optimized button sizes
- Portrait/landscape orientation support

### Mobile View
- Single-column layout
- Thumb-friendly button positioning
- Optimized for one-handed operation
- Large, readable text

---

## ⚙️ Configuration

### Customize Colors

Edit `styles.css` gradient colors:

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #ec4899;
}
```

### Change Font

Modify `index.html` to use different font:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

### Adjust Blur Effect

Modify glassmorphism backdrop blur in `styles.css`:

```css
.calculator {
  backdrop-filter: blur(20px);  /* Increase from 10px */
}
```

---

## 💾 Data & Privacy

### Browser Storage

All calculations are stored locally:

```javascript
// Stored in browser's localStorage
localStorage.setItem('timeHistory', JSON.stringify(history));
```

**Privacy:** No data is sent to servers. Everything stays on your device.

### Clear Data

Users can clear history at any time:
- Click "Clear History" button
- localStorage is wiped
- Calculation fresh start

---

## 📊 Example Use Cases

### Use Case 1: Freelance Project Tracking

**Project: Website Redesign**
```
Day 1: 8:30 (morning design)
Day 2: 6:45 (coding)
Day 3: 4:15 (testing & fixes)
Total: 8:30 + 6:45 + 4:15 = 19:30 hours
```

### Use Case 2: Team Time Allocation

**Team Meeting Fallback:**
```
Meeting 1: 2:00 (requirements)
Meeting 2: 1:30 (design review)
Coding: 3:45 (implementation)
Total: 2:00 + 1:30 + 3:45 = 7:15 hours
```

### Use Case 3: Workout Duration

**Weekly Training:**
```
Monday: 1:30 (gym)
Wednesday: 0:45 (cardio)
Friday: 1:15 (strength)
Total: 1:30 + 0:45 + 1:15 = 3:30 hours
```

---

## 🚨 Known Limitations

| Limitation | Reason | Workaround |
|-----------|--------|-----------|
| No timezone handling | Simplified for UX | Use for relative time, not absolute |
| Limited to 24-59 hours | Design assumption | Break into days manually |
| No recurring calculations | Single-purpose tool | Suitable for on-demand use |
| No export to CSV | Privacy-first approach | Copy results manually |

---

## 🤝 Contributing

Found a bug? Want to add features like time-to-deadline?

1. Fork the repo
2. Create a feature branch
3. Commit improvements
4. Open a Pull Request

---

## 📝 License

MIT License - Use freely for personal and commercial projects.

---

## 🙋 FAQ

**Q: Why glassmorphism?**
A: Modern, beautiful aesthetic that feels contemporary without being overly complex. It's also trending in 2024-2025 UI design.

**Q: Does it work offline?**
A: Yes! Completely offline-capable. Everything runs in your browser.

**Q: Can I export my history?**
A: Currently manual copy-paste. Future versions may add CSV/JSON export.

**Q: What browsers are supported?**
A: All modern browsers (Chrome, Firefox, Safari, Edge). Requires CSS Grid and localStorage support.

**Q: Can I embed this on my website?**
A: Not directly, but you can fork and host it on your own domain.

---

## 📞 Contact

- 🌐 Website: [bojiang.org](https://bojiang.org)
- 📧 Email: hi@bojiang.org
- 🐙 GitHub: [@hakupao](https://github.com/hakupao)
- 🔗 Live: [time.bojiang.org](https://time.bojiang.org)

---

<div align="center">

**Track time beautifully, calculate effortlessly ⏰**

Made with ❤️ in Yokohama

</div>
