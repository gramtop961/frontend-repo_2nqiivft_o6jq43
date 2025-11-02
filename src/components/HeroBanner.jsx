export default function HeroBanner() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-[#C40048] text-xs font-semibold mb-4">
            Welcome to UBD Admissions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Explore. Apply. Achieve.
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover programmes across faculties, start your application, and join a vibrant
            community of scholars. Experience a modern, streamlined process designed to guide you
            from exploration to admission with clarity and confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#C40048] text-white font-semibold shadow hover:shadow-md transition-shadow"
            >
              Explore Courses
            </a>
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#C40048]/30 text-[#C40048] font-semibold bg-white hover:bg-pink-50 transition-colors"
            >
              Start Application
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-pink-100">
            <img
              src="https://images.unsplash.com/photo-1523246193296-7f3b94fa0b52?q=80&w=1600&auto=format&fit=crop"
              alt="UBD Campus"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">A glimpse of campus life and learning at UBD.</p>
        </div>
      </div>
    </section>
  );
}
