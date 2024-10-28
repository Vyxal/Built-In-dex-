import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
export default function BuiltInDetailPage({ name, description, examples, related, languages }) {

    const renderRelated = () => {
        return related.map((rel, i) => (
            // TODO: Make this parse `[...]` as a link to the built-in page
            <li key={i} className="">{rel}</li>
        ))
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 to-blue-900 text-white">
            {/* Navigation */}
            <nav className="bg-blue-700 p-4 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-blue-200 transition">All Built-Ins</Link>
                        <Link href="#" className="hover:text-blue-200 transition">Recent Built-Ins</Link>
                    </div>
                    <div className="w-1/3">
                        <Input type="search" placeholder="Search..." className="w-full bg-white text-black" />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto mt-8 p-8 bg-gray-300 text-black rounded-lg">
                <h1 className="text-4xl font-bold mb-6">Built-In: {name}</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                    <p>{description}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Examples</h2>
                    <pre className="bg-gray-200 p-2 rounded">
                        <code>
                            {examples}
                        </code>
                    </pre>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Related</h2>
                    <ul className="list-disc list-inside">
                        <li><span className="text-blue-600">[Concatenation]</span> in some languages is added as an overload of addition when given two strings.</li>
                        <li><span className="text-blue-600">[Subtraction]</span>, <span className="text-blue-600">[Multiplication]</span>, and <span className="text-blue-600">[Division]</span> are the other 3 fundamental math operations.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Usage in Other Languages</h2>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="border border-blue-800 px-4 py-2">Language</th>
                                <th className="border border-blue-800 px-4 py-2">Token</th>
                                <th className="border border-blue-800 px-4 py-2">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                languages.map((lang, i) => (
                                    <tr key={i} className="bg-gray-200">
                                        <td className="border border-blue-800 px-4 py-2">{lang.language}</td>
                                        <td className="border border-blue-800 px-4 py-2">{lang.token}</td>
                                        <td className="border border-blue-800 px-4 py-2">{lang.notes}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </main>

            {/* Background circular patterns */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            </div>
        </div>
    )
}