import { BookOpen, GraduationCap, Info, ChevronRight } from "lucide-react";
import { useState } from "react";

function Tile({ icon: Icon, title, description, href }) {
  return (
    <a
      href={href}
      className="group block rounded-2xl bg-white ring-1 ring-pink-100 hover:ring-pink-200 shadow-sm hover:shadow-md transition-all p-6"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-pink-100 text-[#C40048] grid place-items-center">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-[#C40048] font-semibold text-sm">
            See more <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ExploreTiles() {
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <section id="discover" className="py-12 sm:py-16 bg-gradient-to-b from-white to-pink-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Start your journey</h2>
            <p className="mt-1 text-gray-600">Quick links to help you navigate the admissions process.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setActiveTab("undergraduate")}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                activeTab === "undergraduate"
                  ? "bg-[#C40048] text-white border-[#C40048]"
                  : "bg-white text-gray-700 border-pink-200 hover:bg-pink-50"
              }`}
            >
              Undergraduate
            </button>
            <button
              onClick={() => setActiveTab("postgraduate")}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                activeTab === "postgraduate"
                  ? "bg-[#C40048] text-white border-[#C40048]"
                  : "bg-white text-gray-700 border-pink-200 hover:bg-pink-50"
              }`}
            >
              Postgraduate
            </button>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Tile
            icon={BookOpen}
            title="Course"
            description="View programmes, requirements, and faculties."
            href="#courses"
          />
          <Tile
            icon={GraduationCap}
            title="Apply"
            description="Begin your application in a few simple steps."
            href="#apply"
          />
          <Tile
            icon={Info}
            title="About"
            description="Learn more about UBD's mission and campus life."
            href="#about"
          />
        </div>

        {/* Courses preview with simple filter/search UI */}
        <div id="courses" className="mt-12 rounded-2xl bg-white ring-1 ring-pink-100 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <h3 className="text-xl font-bold text-gray-900">Courses</h3>
            <div className="flex items-center gap-2">
              <select className="px-3 py-2 rounded-xl border border-pink-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200">
                <option>Academic Year 2025–2026</option>
                <option>Academic Year 2024–2025</option>
              </select>
              <select className="px-3 py-2 rounded-xl border border-pink-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200">
                <option>{activeTab === "postgraduate" ? "Postgraduate" : "Undergraduate"}</option>
              </select>
              <input
                type="text"
                placeholder="Not sure? Enter a keyword..."
                className="w-full md:w-64 px-3 py-2 rounded-xl border border-pink-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                faculty: "School of Digital Science (SDS)",
                img:
                  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop",
                desc: "Innovating with AI, data science, and cybersecurity for tomorrow's world.",
                programmes: [
                  "Computer Science",
                  "Artificial Intelligence & Robotics",
                  "Data Science",
                  "Cybersecurity & Forensics",
                  "Applied Artificial Intelligence",
                ],
                link: "https://sds.ubd.edu.bn/",
              },
              {
                faculty: "Faculty of Science (FOS)",
                img:
                  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop",
                desc: "Exploring the natural world through rigorous scientific inquiry.",
                programmes: ["Biology", "Chemistry", "Environmental Science", "Mathematics"],
                link: "#",
              },
              {
                faculty: "Faculty of Arts & Social Sciences (FASS)",
                img:
                  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
                desc: "Humanities and social sciences shaping society and culture.",
                programmes: ["Communication Studies", "Sociology", "History", "Geography"],
                link: "#",
              },
            ].map((f) => (
              <FacultyCard key={f.faculty} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ faculty, img, desc, programmes, link }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-pink-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={img} alt={faculty} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold text-gray-900">{faculty}</h4>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-[#C40048] text-white hover:shadow-md"
          >
            Programmes Offered
          </button>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#C40048] hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-pink-100 overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900">{faculty}</h5>
              <p className="mt-1 text-sm text-gray-600">Programmes Offered</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {programmes.map((p) => (
                  <li
                    key={p}
                    className="px-3 py-2 rounded-xl bg-pink-50 text-[#C40048] font-semibold text-sm"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#C40048] font-semibold"
                >
                  Visit Faculty Website <ChevronRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-full text-sm font-semibold border border-pink-200 hover:bg-pink-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
