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
                            Our Mottos
                        </button>
                    </div>
                </div>

                {/* Main Heading*/}
               

                {/* Subtitle */}
                {/* <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    Get started with ViewR's AI surveillance in just 3 simple steps
                </p> */}

                {/* Three Steps Flexbox Layout */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-12 mt-8">
                    {/* Step 1: Book Demo */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <div>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-cog-icon lucide-brain-cog"><path d="m10.852 14.772-.383.923"/><path d="m10.852 9.228-.383-.923"/><path d="m13.148 14.772.382.924"/><path d="m13.531 8.305-.383.923"/><path d="m14.772 10.852.923-.383"/><path d="m14.772 13.148.923.383"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"/><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"/><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"/><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"/><path d="M4.5 10.291A4 4 0 0 0 6 18"/><path d="M6.002 5.125a3 3 0 0 0 .4 1.375"/><path d="m9.228 10.852-.923-.383"/><path d="m9.228 13.148-.923.383"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <h3 className="text-lg font-semibold">Knowledge Transfer</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We believe in sharing knowledge, encouraging learning together as a team. 
                        </p>
                    </div>

                    {/* Step 2: Setup & Configure */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokelineca="round" strokeLinejoin="round" className="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
                        </div>
                        <h3 className="text-lg font-semibold">Revolutionizing Research</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We turn ideas into meaningful research to make a difference.
                        </p>
                    </div>

                    {/* Step 3: Monitor & Analyze */}
                    <div className="text-left flex-1 flex flex-col gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-cog-icon lucide-cloud-cog"><path d="m10.852 19.772-.383.924"/><path d="m13.148 14.228.383-.923"/><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"/><path d="m14.772 15.852.923-.383"/><path d="m14.772 18.148.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="m9.228 15.852-.923-.383"/><path d="m9.228 18.148-.923.383"/></svg>
                        <h3 className="text-lg font-semibold">Conquering Hackathons</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            It is a legacy of aims to lead Hackathons across the nation with innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

