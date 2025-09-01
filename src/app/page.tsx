export default function HelloWorldPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Welcome to your Next.js application
          </p>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            This simple Hello World page is built with Next.js 15, React 19, and styled with Tailwind CSS for a modern, responsive experience.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div className="px-6 py-3 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg border border-white border-opacity-50">
            <span className="text-sm font-semibold text-gray-800">⚡ Next.js 15</span>
          </div>
          <div className="px-6 py-3 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg border border-white border-opacity-50">
            <span className="text-sm font-semibold text-gray-800">⚛️ React 19</span>
          </div>
          <div className="px-6 py-3 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg border border-white border-opacity-50">
            <span className="text-sm font-semibold text-gray-800">🎨 Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  )
}