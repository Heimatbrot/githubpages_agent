import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            OpenHands GitHub Pages Agent
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            This application was created entirely by <strong>OpenHands AI</strong> via{" "}
            <a href="https://app.all-hands.dev" className="text-blue-600 hover:text-blue-800 underline">
              app.all-hands.dev
            </a>. 
            All code, design, and functionality comes from the{" "}
            <a 
              href="https://github.com/Heimatbrot/githubpages_agent" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              githubpages_agent
            </a>{" "}
            repository, demonstrating the power of AI-driven development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/setup"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Setup Guide
            </Link>
            <Link
              href="/about"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/thanks"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Acknowledgments
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Generated Code</h3>
            <p className="text-gray-600">
              Every line of code was written by OpenHands AI, showcasing autonomous development capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Workflow</h3>
            <p className="text-gray-600">
              Complete automation from GitHub issues to deployment, demonstrating end-to-end AI development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-gray-600">
              Fully open source project demonstrating transparent AI development and collaboration.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to automate your development?
          </h2>
          <p className="text-gray-600 mb-6">
            Learn how to set up OpenHands to automatically handle GitHub issues, code, test, and deploy.
          </p>
          <Link
            href="/setup"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
          >
            Get Started with Setup
          </Link>
        </div>
      </main>
    </div>
  );
}
