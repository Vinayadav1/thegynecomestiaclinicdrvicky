import PageHero from "../components/PageHero"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import { Link } from "react-router-dom"
import { GYN_IMAGES } from "../utils/constants"

export default function Pseudo() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero badge="FALSE GYNECOMASTIA" title="Pseudo-Gynecomastia" subtitle="Fat-Related Chest Enlargement Treatment" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={GYN_IMAGES[21]} alt="Pseudo Gynecomastia" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Pseudo-Gynecomastia?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Pseudo-gynecomastia is chest enlargement caused solely by excess fat deposits without any glandular tissue involvement. Unlike true gynecomastia, there is no firm breast tissue present.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">This condition is commonly seen in overweight men and can persist even after significant weight loss.</p>
                <div className="bg-teal-500/10 border-l-4 border-teal-500 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Key Difference:</strong> Pseudo-gynecomastia feels soft and fatty, while true gynecomastia has a firm texture beneath the nipple.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-slate-50 p-10 rounded-3xl">
                <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Why Advanced Techniques?</h3>
                <ul className="space-y-4">
                  {[
                    { t: "Selective Fat Removal", d: "Targets fat cells while preserving surrounding tissues" },
                    { t: "Skin Tightening Effect", d: "Promotes collagen production for better skin retraction" },
                    { t: "Smooth Contours", d: "Creates natural-looking, athletic chest definition" },
                    { t: "Minimal Downtime", d: "Most patients return to work in 3-5 days" },
                  ].map(({ t, d }) => (
                    <li key={t} className="flex gap-4">
                      <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div><h4 className="font-bold mb-1" style={{ color: "#0a1628" }}>{t}</h4><p className="text-slate-600 text-sm">{d}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src="/grades/grade 1 side.jpeg" alt="Pseudo Gynecomastia - Side View" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Ready to Achieve Your Ideal Chest?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Schedule a consultation with Dr. Vicky Jain to determine if you have pseudo-gynecomastia.</p>
            <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}




