import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-12 border-4 border-transparent">
                        {/* Approximate CSS Logo based on "SNS SQUARE" */}
                        <span className="absolute top-0 left-0 w-1/2 h-2 bg-amber-400"></span> {/* Top Left Yellow */}
                        <span className="absolute top-0 left-0 w-2 h-1/2 bg-amber-400"></span>

                        <span className="absolute top-0 right-0 w-1/2 h-2 bg-sky-500"></span> {/* Top Right Blue */}
                        <span className="absolute top-0 right-0 w-2 h-1/2 bg-sky-500"></span>

                        <span className="absolute bottom-0 left-0 w-1/2 h-2 bg-pink-600"></span> {/* Bottom Left Red/Purple */}
                        <span className="absolute bottom-0 left-0 w-2 h-1/2 bg-pink-600"></span>

                        <span className="absolute bottom-0 right-0 w-1/2 h-2 bg-green-500"></span> {/* Bottom Right Green */}
                        <span className="absolute bottom-0 right-0 w-2 h-1/2 bg-green-500"></span>

                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                        </div>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold tracking-tight text-gray-900">SNS</span>
                        <span className="text-xl font-bold tracking-tight text-gray-900">SQUARE</span>
                        <span className="text-[0.6rem] text-gray-500 italic">Redesigning Business</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-6">
                    <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                        About Us
                    </Link>
                    <span className="text-sm text-gray-400">|</span>
                    <span className="text-sm font-medium text-gray-700">SNS Square Agentic AI</span>
                </nav>

                <button className="md:hidden p-2">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
}
