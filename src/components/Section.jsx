import { Smile, Wrench, ShieldCheck } from "lucide-react";

export default function Section() {
    return (
        <div className="text-white py-20 px-4" id="motos">
            <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
                {/* How It Works Badge */}
                <div>
                    {/* <button className="bg-transparent border-blue-500 text-white hover:bg-blue-500/10 rounded-full px-6 py-2 border">
                        How It Works
                    </button> */}
                    <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <button className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-slate-950 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-white">
                            Our Motos
                        </button>
                    </div>
                </div>

                {/* Main Heading*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Three steps to secure your premises
                </h2>

                {/* Subtitle */}
                {/* <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    Get started with ViewR's AI surveillance in just 3 simple steps
                </p> */}

                {/* Three Steps Flexbox Layout */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-12 mt-8">
                    {/* Step 1: Book Demo */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <div>
                            <Smile className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">Book Demo</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Schedule a personalized demonstration of ViewR's AI surveillance capabilities.
                        </p>
                    </div>

                    {/* Step 2: Setup & Configure */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <div>
                            <Wrench className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">Setup & Configure</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Our experts integrate ViewR with your existing CCTV infrastructure seamlessly.
                        </p>
                    </div>

                    {/* Step 3: Monitor & Analyze */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <ShieldCheck className="w-10 h-10 text-white" />
                        <h3 className="text-lg font-semibold">Monitor & Analyze</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Start monitoring with 98% accuracy AI recognition and real-time analytics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

