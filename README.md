# Website

Personal website of @Kallu-A built with Next.js and deployed to GitHub Pages.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📦 **Static Export** for GitHub Pages
- 🔄 **Automated Deployment** via GitHub Actions
- 💻 **TypeScript** for type safety
- 🌙 **Dark Mode** support

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kallu-A/Website.git
   cd Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

To create a production build:

```bash
npm run build
```

This will generate static files in the `out` directory.

## 🚢 Deployment

This website automatically deploys to GitHub Pages when you push to the `main` branch.

### Initial GitHub Pages Setup

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

Your site will be available at: `https://kallu-a.github.io/Website/`

### Manual Deployment

You can also trigger a deployment manually:

1. Go to the **Actions** tab in your repository
2. Select the "Deploy Next.js to GitHub Pages" workflow
3. Click "Run workflow"

## 📁 Project Structure

```
Website/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── .github/
│   └── workflows/
│       └── nextjs.yml   # GitHub Actions workflow
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Update Content

Edit `app/page.tsx` to customize the home page content.

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`

### Add New Pages

Create new files in the `app` directory following Next.js App Router conventions.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates static export)
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## 🔧 Configuration

The `next.config.ts` file is configured for static export with:
- `output: 'export'` - Enables static HTML export
- `images: { unoptimized: true }` - Required for static export
- `basePath: '/Website'` - GitHub Pages subdirectory path

## 📄 License

ISC

## 👤 Author

[@Kallu-A](https://github.com/Kallu-A)
