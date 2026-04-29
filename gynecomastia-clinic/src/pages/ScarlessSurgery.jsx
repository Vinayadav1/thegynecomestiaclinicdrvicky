import PageHero from "../components/PageHero"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import { Link } from "react-router-dom"
import { GYN_IMAGES } from "../utils/constants"

export default function ScarlessSurgery() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero badge="INVISIBLE SURGERY" title="Scarless Gynecomastia Surgery" subtitle="Advanced Techniques for Virtually Invisible Scars" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={GYN_IMAGES[24]} alt="Scarless Surgery Result" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Scarless Surgery?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Scarless gynecomastia surgery uses advanced techniques that minimize visible scarring through tiny, strategically placed incisions. Dr. Jain's approach results in scars so minimal they are virtually undetectable.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Using advanced ultrasound technology, Dr. Jain performs corrections through incisions as small as 3-4mm, hidden in natural skin creases.</p>
                <div className="bg-teal-500/10 border-l-4 border-teal-500 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Dr. Jain's Promise:</strong> Most patients report their scars fade to nearly invisible within 6-12 months.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-10 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>Advanced Techniques</h3>
                <p className="text-slate-700 mb-6">For Grade 1 and pseudo-gynecomastia, tiny 3-4mm incisions are all that is needed.</p>
                <ul className="space-y-3 text-slate-600">
                  {["Incisions smaller than a grain of rice", "Hidden in natural skin folds", "Fade to nearly invisible", "No stitches required"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>Periareolar Incision</h3>
                <p className="text-slate-700 mb-6">For cases requiring gland excision, incisions are placed along the areola border where they blend naturally.</p>
                <ul className="space-y-3 text-slate-600">
                  {["Follows natural color transition", "Camouflaged by pigmentation", "Minimal length (2-3cm)", "Excellent healing properties"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {GYN_IMAGES.slice(12, 15).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <img src={img} alt={`Scarless result ${i + 1}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Scar Healing Timeline</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { label: "2W", period: "2 Weeks", desc: "Incisions closed and healing. Scars appear red or pink.", color: "teal" },
                { label: "6W", period: "6 Weeks", desc: "Scars begin to fade. Color lightens gradually.", color: "teal" },
                { label: "3M", period: "3 Months", desc: "Significant fading. Scars becoming less noticeable.", color: "amber" },
                { label: "1Y", period: "12 Months", desc: "Scars mature to thin, pale lines. Nearly invisible.", color: "amber" },
              ].map(({ label, period, desc, color }) => (
                <div key={period} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${color === "teal" ? "bg-teal-500" : "bg-amber-400"} rounded-full flex items-center justify-center text-white font-bold`}>{label}</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl flex-1 shadow-sm">
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#0a1628" }}>{period}</h3>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Experience Invisible Surgery</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Discover how Dr. Vicky Jain's scarless techniques can give you the results you want.</p>
            <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}




