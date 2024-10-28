import { Input } from "@/components/ui/input"
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 to-blue-900 text-white relative overflow-hidden">
            {/* Background circular patterns */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            {/* Navigation */}
            <nav className="bg-blue-700 p-4 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="/" className="hover:text-blue-200 transition">All Built-Ins</Link>
                        <Link href="/recent" className="hover:text-blue-200 transition">Recent Built-Ins</Link>
                    </div>
                    <div className="w-1/3">
                        <Input type="search" placeholder="Search..." className="w-full bg-white text-black" />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div>
                <Outlet />
            </div>

            {/* Stars */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        </div>
    )
}