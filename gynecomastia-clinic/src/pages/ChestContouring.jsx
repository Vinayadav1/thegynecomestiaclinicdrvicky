import PageHero from "../components/PageHero"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import { Link } from "react-router-dom"
import { GYN_IMAGES } from "../utils/constants"

export default function ChestContouring() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero badge="AESTHETIC ENHANCEMENT" badgeColor="amber" title="Male Chest Contouring" subtitle="Sculpt Your Ideal Masculine Physique" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={GYN_IMAGES[23]} alt="Male Chest Contouring" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Male Chest Contouring?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Male chest contouring is an advanced body sculpting procedure designed to create a more defined, athletic, and masculine chest appearance. It goes beyond simple fat removal to artistically shape the pectoral region.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Dr. Jain combines surgical expertise with an artistic eye to create natural-looking results tailored to your unique anatomy.</p>
                <div className="bg-amber-400/10 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Perfect For:</strong> Men seeking athletic chest definition, bodybuilders, fitness enthusiasts.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: "Advanced Techniques", desc: "Precise fat removal", color: "teal" },
                { title: "Gland Sculpting", desc: "Reshaping of breast tissue", color: "amber" },
                { title: "Skin Tightening", desc: "Smooth contours", color: "teal" },
                { title: "Muscle Definition", desc: "Natural pectoral contours", color: "amber" },
              ].map(({ title, desc, color }) => (
                <div key={title} className="bg-white p-8 rounded-3xl shadow-lg text-center">
                  <div className={`w-16 h-16 ${color === "teal" ? "bg-teal-500/10" : "bg-amber-400/10"} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <svg className={`w-8 h-8 ${color === "teal" ? "text-teal-500" : "text-amber-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0a1628" }}>{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Sculpt Your Ideal Physique</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Schedule a consultation with Dr. Vicky Jain to discuss how chest contouring can help you achieve your aesthetic goals.</p>
            <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}




