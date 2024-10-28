import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            {/* Main Content */}
            <main className="container mx-auto mt-20 text-center px-4 relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Built-In[dex]</h1>
                <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                    Making a golfing or esoteric programming language and need inspirations for what operators and built-in functions to include? Built-in[dex] provides an index of common, cool, and helpful operations present within a variety of languages.
                </p>
                <Link>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
                        Go to Built-Ins List
                    </Button>
                </Link>
            </main>
        </>
    )
}