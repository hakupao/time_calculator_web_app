# ChronoCalc - Premium Time Calculator

![ChronoCalc Demo](https://via.placeholder.com/800x400?text=ChronoCalc+Preview)
*(Note: Replace with actual screenshot)*

ChronoCalc is a modern, premium web-based time calculator designed for professionals who need to perform complex time arithmetic with ease. Whether you're tracking work hours, calculating flight durations, or managing video editing timelines, ChronoCalc simplifies the process with a beautiful, responsive interface.

## ✨ Features

-   **Flexible Arithmetic**: Add or subtract hours and minutes effortlessly.
-   **Dynamic Rows**: Add as many time entries as you need.
-   **Continue Calculation**: Use the result of one calculation as the starting point for the next.
-   **History Tracking**: Automatically keeps a history of your calculations during a session.
-   **Premium Design**: A sleek, dark-mode interface with glassmorphism effects and smooth animations.
-   **Responsive**: Works perfectly on desktop and mobile devices.

## 🚀 Deployment

### Synology NAS (Web Station)
1.  Install **Web Station** from Package Center.
2.  Upload the project files (`index.html`, `style.css`, `script.js`) to your `web` folder (e.g., `web/time-calculator`).
3.  Access via `http://[YOUR_NAS_IP]/time-calculator/`.

### Docker
You can also host this using a simple Nginx container:
```bash
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

## 🛠️ Technologies

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom properties, Flexbox, Animations, Glassmorphism.
-   **JavaScript (ES6+)**: Core logic and DOM manipulation.
-   **Google Fonts**: 'Outfit' typeface.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
&copy; 2025 ChronoCalc. Created by [hakupao](https://github.com/hakupao).
