import PageHero from "../components/PageHero"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import { Link } from "react-router-dom"
import { GYN_IMAGES } from "../utils/constants"

export default function Grade1() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero badge="GRADE I TREATMENT" title="Grade 1 Gynecomastia" subtitle="Minimal Enlargement, Maximum Results" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/grades/grade 1.jpeg" alt="Grade 1 Gynecomastia" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Grade 1 Gynecomastia?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Grade 1 gynecomastia is the mildest form of male breast enlargement, characterized by small localized tissue beneath the nipple area. There is minimal breast enlargement and no excess skin.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">This grade typically affects younger men and is often the easiest to treat with minimal surgical intervention.</p>
                <div className="bg-teal-500/10 border-l-4 border-teal-500 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Good News:</strong> Grade 1 responds excellently to treatment with minimal scarring and quick recovery.</p>
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
                <p className="text-slate-700 mb-6 leading-relaxed">State-of-the-art surgical techniques that selectively targets fat cells while preserving surrounding tissues.</p>
                <ul className="space-y-3 text-slate-600">
                  {["Tiny incisions (3-4mm)", "Minimal scarring", "Quick recovery (3-5 days)", "Smooth, natural contour"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img src="/grades/grade 1 side.jpeg" alt="Grade 1 side view" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Minimal Intervention", desc: "Less invasive procedure means faster healing and better outcomes" },
                { title: "Quick Recovery", desc: "Most patients resume normal activities within a week" },
                { title: "Excellent Results", desc: "Natural-looking chest contour with virtually invisible scars" },
              ].map(({ title, desc }) => (
                <div key={title} className="text-center p-8 bg-slate-50 rounded-2xl">
                  <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Take the Next Step?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Schedule a consultation with Dr. Vicky Jain to discuss your Grade 1 gynecomastia treatment options.</p>
            <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}




