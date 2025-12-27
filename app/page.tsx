export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Kallu-A's Website
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          This is a Next.js static website deployed to GitHub Pages
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/Kallu-A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            GitHub Profile
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-semibold"
          >
            Next.js Docs
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">⚡ Fast</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Static site generation for optimal performance
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">🚀 Automated</h2>
            <p className="text-gray-600 dark:text-gray-400">
              GitHub Actions deploys on every push
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">🎨 Modern</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js 15 and Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
