import Image from 'next/image';

export default function CertificateSection() {
    return (
        <section className="w-full bg-slate-50 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <div className="w-full max-w-4xl relative">
                    {/* Card wrapper for certificate */}
                    <div className="bg-white p-2 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
                        <Image
                            src="/images/certificate.jpg"
                            alt="CIO Tech Outlook Certificate"
                            width={1000}
                            height={700}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
