import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ExploreTiles from "./components/ExploreTiles";
import NewsAndFooter from "./components/NewsAndFooter";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroBanner />
        <ExploreTiles />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">About UBD</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Universiti Brunei Darussalam (UBD) is committed to academic excellence, innovation,
                and community impact. Our programmes are designed to empower students with the skills
                and mindset to thrive in a changing world.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                <li>World-class faculties and research centers</li>
                <li>Vibrant student life and international community</li>
                <li>Industry partnerships and global exchange opportunities</li>
              </ul>
            </div>
            <div>
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                  alt="About UBD"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <NewsAndFooter />
      </main>
    </div>
  );
}

export default App;
