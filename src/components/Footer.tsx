import Link from 'next/link';
import { Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 md:py-16 px-4 md:px-6 mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

                {/* Logo Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="relative h-12 w-12">
                            <span className="absolute top-0 left-0 w-1/2 h-2 bg-amber-400"></span>
                            <span className="absolute top-0 left-0 w-2 h-1/2 bg-amber-400"></span>
                            <span className="absolute top-0 right-0 w-1/2 h-2 bg-sky-500"></span>
                            <span className="absolute top-0 right-0 w-2 h-1/2 bg-sky-500"></span>
                            <span className="absolute bottom-0 left-0 w-1/2 h-2 bg-pink-600"></span>
                            <span className="absolute bottom-0 left-0 w-2 h-1/2 bg-pink-600"></span>
                            <span className="absolute bottom-0 right-0 w-1/2 h-2 bg-green-500"></span>
                            <span className="absolute bottom-0 right-0 w-2 h-1/2 bg-green-500"></span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-xl font-bold tracking-tight text-gray-900">SNS</span>
                            <span className="text-xl font-bold tracking-tight text-gray-900">SQUARE</span>
                            <span className="text-[0.6rem] text-gray-500 italic">Redesigning Business</span>
                        </div>
                    </div>
                </div>

                {/* Agentic Workbench */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg text-gray-900">Agentic Workbench</h3>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Foundation Agent</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Industrial Solutions</Link>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg text-gray-900">Company</h3>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
                </div>

                {/* Address & Email */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                            BLOCK-L, Embassy Tech Village,<br />
                            Outer Ring Rd, Devarabisanahalli,<br />
                            Bellandur,<br />
                            Bengaluru, Karnataka 560103
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
                        <a href="mailto:info@snssquare.com" className="text-gray-600 hover:text-gray-900">info@snssquare.com</a>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Link href="#" className="text-black hover:opacity-75"><Linkedin className="h-6 w-6" /></Link>
                        <Link href="#" className="text-black hover:opacity-75"><Youtube className="h-6 w-6" /></Link>
                        <Link href="#" className="text-black hover:opacity-75"><Instagram className="h-6 w-6" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
