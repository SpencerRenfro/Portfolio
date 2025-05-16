# Portfolio Website

A personal portfolio website built with React and Tailwind CSS, featuring responsive design, light/dark mode support, and interactive components.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Light and dark mode support based on user system preferences
- Interactive snowboarding statistics with season-by-season breakdown
- Project showcase with detailed descriptions
- Skills section highlighting technical abilities
- Resume download functionality
- Social media links

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v6.0.0 or later)

## Getting Started

Follow these steps to get the portfolio website running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/SpencerRenfro/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

This will start the development server and open the website in your default browser at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build of the website:

```bash
npm run build
```

This will create an optimized build in the `build` folder that you can deploy to a web server.

## Deployment

You can deploy this portfolio to various platforms:

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add the following to your `package.json`:
```json
"homepage": "https://SpencerRenfro.github.io/Portfolio",
"scripts": {
  // other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Netlify

1. Create a `netlify.toml` file in the root directory:
```toml
[build]
  command = "npm run build"
  publish = "build"
```

2. Deploy to Netlify using their CLI or connect your GitHub repository through their website.

## Customization

### Changing Content

Most of the content can be modified by editing the component files in the `src/components` directory:

- `AboutMe.js` - Personal information, education, and experience
- `Projects.js` - Project showcase
- `SnowboardingStats.js` - Snowboarding statistics
- `Navigation.js` - Navigation links

### Styling

This project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.js` file.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Create React App](https://create-react-app.dev/)
