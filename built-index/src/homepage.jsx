import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white relative overflow-hidden">
            {/* Background circular patterns */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute right-72 top-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            {/* Navigation */}
            <nav className="bg-blue-700 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-200 transition">All Built-Ins</a>
                        <a href="#" className="hover:text-blue-200 transition">Recent Built-Ins</a>
                    </div>
                    <div className="w-1/3">
                        <Input type="search" placeholder="Search..." className="w-full bg-white text-black" />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto mt-20 text-center px-4">
                <h1 className="text-6xl font-bold mb-6">Built-In[dex]</h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                    Making a golfing or esoteric programming language and need inspirations for what operators and built-in functions to include? Built-in[dex] provides an index of common, cool, and helpful operations present within a variety of languages.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
                    Go to Built-Ins List
                </Button>
            </main>

            {/* Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-70"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 5 + 3}s infinite`
                        }}
                    ></div>
                ))}
            </div>

            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
      `}</style>
        </div>
    )
}