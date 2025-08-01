import Blob from "../components/blob";
export default function ChooseUs() {
  return (
    <section className="bg-black relative text-white py-16 px-6">
      <Blob className="top-0 left-0 w-96 h-64 bg-[#1000DE]/40 z-30" />
      <Blob className="top-0 right-0 w-96 h-64 bg-[#1000DE]/40 z-30" />
      <Blob className="bottom-0 left-0 w-96 h-64 bg-[#1000DE]/30 z-30" />
      <Blob className="bottom-0 right-0 w-96 h-64 bg-[#1000DE]/30 z-30" />

      <div className="w-full mx-auto ml-6  mb-10">
        <h2 className="text-4xl font-bold">
          Some reasons to <span className="text-blue-400">Choose Us</span>
        </h2>
      </div>

      {/* Reasons */}
      <div className="grid md:grid-cols-3 gap-10 w-full mx-auto ml-0">
        <div className=" p-6 rounded-2xl shadow-lg ml-0">
          <h3 className="text-xl font-semibold mb-2 ml-0">Knowledge Transfer</h3>
          <p className="text-gray-400">
            At AIMS-DTU, teaching is a two-way road. We are a learning-focused society, committed to staying in touch with the latest developments in AI-ML.
          </p>

        </div>
        <div className="p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Revolutionizing Research</h3>
          <p className="text-gray-400">
            We are committed to contributing to the AI-ML community, with our members regularly attending and presenting papers at international conferences.
          </p>
        </div>
        <div className=" p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Dominating Hackathons</h3>
          <p className="text-gray-400">
            We've won prestigious national hackathons like the Bharatiya Antriksh Hackathon and the Smart India Hackathon (twice!).
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div className="relative space-y-10">
          <div className="text-8xl bg-gradient-to-r from-[#cce7ff] via-[#99ccff] to-[#4da6ff] bg-clip-text text-transparent">
            42
          </div>
          <div className="text-gray-400">Year Experience</div>
        </div>
        <div className="relative space-y-10">
          <div className="text-8xl bg-gradient-to-r from-[#cce7ff] via-[#99ccff] to-[#4da6ff] bg-clip-text text-transparent">
            204
          </div>
          <div className="text-gray-400">Owned</div>
        </div>
        <div className="relative space-y-10">
          <div className="text-8xl bg-gradient-to-r from-[#cce7ff] via-[#99ccff] to-[#4da6ff] bg-clip-text text-transparent">
            24M
          </div>
          <div className="text-gray-400">Digital Art</div>
        </div>
        <div className="relative space-y-10">
          <div className="text-8xl bg-gradient-to-r from-[#cce7ff] via-[#99ccff] to-[#4da6ff] bg-clip-text text-transparent">
            112
          </div>
          <div className="text-gray-400">Project Completed</div>
        </div>
      </div>


    </section>
  );
}
