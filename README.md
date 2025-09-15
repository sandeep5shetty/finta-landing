# finta-landing

Finta Landing is a modern, responsive landing page built with React and Vite. It showcases Finta's features, integrations, and workflow tools with a clean UI and interactive components.

## Features

- Responsive design with Tailwind CSS
- Bento grid layout for feature highlights
- SVG icon components for branding and integrations
- Dark mode support
- Model selector and workflow builder UI
- Easy to customize and extend

## Project Structure

```
src/
  App.jsx
  index.css
  main.jsx
  assets/
	 finta-logo.svg
	 finta-logo-dark.svg
	 hero-ui-v5.webp
	 react.svg
  components/
	 BentoSection.jsx
	 Btn.jsx
	 Hero.jsx
	 Icons.jsx
	 Navbar.jsx
public/
  vite.svg
index.html
vite.config.js
eslint.config.js
package.json
README.md
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

- Edit components in `src/components` to change layout or add features.
- Update assets in `src/assets` for branding.
- Modify styles in `src/index.css` or use Tailwind utility classes.

## License

MIT
