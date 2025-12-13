import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are dedicated to building modern, fast, and scalable web applications using the latest technologies. 
              Our focus is on creating exceptional user experiences while maintaining high performance and accessibility standards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Next.js 16</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Development</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• ESLint for code quality</li>
                  <li>• Hot reload development</li>
                  <li>• Optimized builds</li>
                  <li>• SEO optimization</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Server-Side Rendering</h4>
                <p className="text-blue-700 text-sm">Fast initial page loads with SSR support</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Static Generation</h4>
                <p className="text-green-700 text-sm">Pre-built pages for optimal performance</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">API Routes</h4>
                <p className="text-purple-700 text-sm">Built-in API endpoints for backend functionality</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}