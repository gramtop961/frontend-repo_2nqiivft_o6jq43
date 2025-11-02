import { Calendar, ChevronRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function NewsAndFooter() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="news">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">News & Events</h2>
            <p className="mt-1 text-gray-600">Stay updated with the latest from UBD.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1 text-[#C40048] font-semibold">
            See more <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "UBD Open Day 2025",
              img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop",
              summary: "Experience campus life, meet faculty, and explore programmes.",
              date: "Mar 12, 2025",
            },
            {
              title: "Research Excellence Awards",
              img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop",
              summary: "Celebrating groundbreaking research across faculties.",
              date: "Feb 28, 2025",
            },
            {
              title: "International Student Orientation",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
              summary: "Welcome session and resources for our global community.",
              date: "Jan 15, 2025",
            },
          ].map((n) => (
            <article
              key={n.title}
              className="rounded-2xl overflow-hidden bg-white ring-1 ring-pink-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={n.img} alt={n.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{n.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{n.summary}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-4 w-4" /> {n.date}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <a href="#" className="inline-flex items-center gap-1 text-[#C40048] font-semibold">
            See more <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-pink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C40048] grid place-items-center text-white font-bold">
                  UBD
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-[#C40048] leading-tight">
                    Universiti Brunei Darussalam
                  </p>
                  <p className="text-xs text-gray-500 leading-tight">جامعة بروناي دار السلام</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 max-w-2xl">
                Tungku Link, Gadong BE1410, Brunei Darussalam • +673 246 3001 • admissions@ubd.edu.bn
              </p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-white ring-1 ring-pink-100 hover:ring-pink-200 text-[#C40048]">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-white ring-1 ring-pink-100 hover:ring-pink-200 text-[#C40048]">
                <Facebook className="h-5 w-5" />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-full bg-white ring-1 ring-pink-100 hover:ring-pink-200 text-[#C40048]">
                <Youtube className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-white ring-1 ring-pink-100 hover:ring-pink-200 text-[#C40048]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Universiti Brunei Darussalam. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}
