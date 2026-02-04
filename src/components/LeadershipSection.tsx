import Image from 'next/image';

export default function LeadershipSection() {
    return (
        <section className="w-full bg-white py-12 md:py-20 relative">
            {/* Background gradient/curve effect simulation */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-r from-gray-50 to-white -z-10 rounded-b-[50%] opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-12">

                {/* Main Image */}
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/leadership.jpg"
                        alt="SNS Square Leadership Presentation"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Leadership that inspires trust and growth
                    </h2>
                </div>
            </div>
        </section>
    );
}
