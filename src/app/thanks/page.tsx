import Link from "next/link";

export default function Thanks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="text-green-600 hover:text-green-800 flex items-center gap-2 mb-6 justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-green-900 mb-6">Thank You</h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              This project exists thanks to the incredible work of many open source contributors, 
              AI researchers, and the broader developer community.
            </p>
          </div>

          {/* OpenHands Team */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-900">OpenHands AI Team</h2>
                <p className="text-green-700">The brilliant minds behind autonomous AI development</p>
              </div>
            </div>
            <p className="text-green-700 mb-4">
              Special thanks to the <strong>OpenHands (formerly SWE-agent)</strong> team for creating 
              an AI system capable of autonomous software development. This entire application, 
              including all code, design, and functionality, was created by OpenHands AI.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/All-Hands-AI/OpenHands" 
                className="text-green-600 hover:text-green-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenHands GitHub Repository
              </a>
              <a 
                href="https://app.all-hands.dev" 
                className="text-green-600 hover:text-green-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try OpenHands
              </a>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-green-900 mb-3">Frontend Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-green-700">Next.js 16 - React Framework</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-green-700">React 19 - UI Library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-green-700">TypeScript - Type Safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-green-700">Tailwind CSS 4 - Styling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-900 mb-3">Development & Deployment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700">GitHub Pages - Hosting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700">GitHub Actions - CI/CD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700">ESLint - Code Quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700">Git - Version Control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Open Source Community */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-900">Open Source Community</h2>
                <p className="text-green-700">The foundation that makes everything possible</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">React Team</h4>
                <p className="text-sm text-green-700">For creating the revolutionary UI library</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Vercel Team</h4>
                <p className="text-sm text-green-700">For Next.js and modern web development tools</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Tailwind Labs</h4>
                <p className="text-sm text-green-700">For the utility-first CSS framework</p>
              </div>
            </div>
          </div>

          {/* AI & Research Community */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-900">AI Research Community</h2>
                <p className="text-green-700">Advancing the frontiers of artificial intelligence</p>
              </div>
            </div>
            <p className="text-green-700 mb-4">
              This project represents the culmination of decades of AI research, from early machine learning 
              algorithms to modern large language models and autonomous agents.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-900 mb-2">Research Foundations</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Transformer architecture researchers</li>
                  <li>• OpenAI and the GPT series</li>
                  <li>• Software engineering automation research</li>
                  <li>• Code generation and understanding models</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-900 mb-2">Open Source AI Tools</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Hugging Face ecosystem</li>
                  <li>• PyTorch and TensorFlow communities</li>
                  <li>• LangChain and AI agent frameworks</li>
                  <li>• Code analysis and generation tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GitHub & Hosting */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-900">GitHub & Microsoft</h2>
                <p className="text-green-700">Providing the platform for collaboration and hosting</p>
              </div>
            </div>
            <p className="text-green-700 mb-4">
              Thank you to GitHub for providing free hosting through GitHub Pages, robust version control, 
              and the collaborative platform that makes open source development possible.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Heimatbrot/githubpages_agent" 
                className="text-green-600 hover:text-green-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
              <a 
                href="https://pages.github.com/" 
                className="text-green-600 hover:text-green-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>

          {/* Project Stats */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-6">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-green-700">AI Generated</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">0</div>
                <div className="text-sm text-green-700">Human Code Lines</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-sm text-green-700">Pages Created</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">∞</div>
                <div className="text-sm text-green-700">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">The Future is Here</h2>
            <p className="text-lg mb-6 opacity-90">
              This project demonstrates that AI can now autonomously create, test, and deploy 
              complete web applications. We're witnessing the dawn of a new era in software development.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/setup"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Try It Yourself
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}