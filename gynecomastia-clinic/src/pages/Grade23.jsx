import PageHero from "../components/PageHero"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import { Link } from "react-router-dom"
import { GYN_IMAGES } from "../utils/constants"

export default function Grade23() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero badge="GRADE II & III TREATMENT" badgeColor="amber" title="Grade 2 & 3 Gynecomastia" subtitle="Comprehensive Treatment for Moderate to Severe Cases" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/grades/grade 2.jpeg" alt="Grade 2 Gynecomastia" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Grade 2 Gynecomastia?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Grade 2 gynecomastia represents moderate breast enlargement extending beyond the areola. This grade involves both excess glandular tissue and fat accumulation.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Treatment requires a combination approach of liposuction and gland excision for optimal results.</p>
                <div className="bg-teal-500/10 border-l-4 border-teal-500 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Treatment Approach:</strong> Combination of advanced techniques and surgical gland removal ensures natural-looking results.</p>
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
                <p className="text-slate-700 mb-6 leading-relaxed">Removes excess fatty tissue with precision, creating smooth contours and natural chest definition.</p>
                <ul className="space-y-3 text-slate-600">
                  {["Selective fat removal", "Minimal scarring", "Smooth contours", "Quick recovery (5-7 days)"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img src="/grades/grade 2 side.jpeg" alt="Grade 2 side view" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What is Grade 3 Gynecomastia?</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Grade 3 gynecomastia involves moderate to severe enlargement with excess skin. This is a more advanced condition requiring comprehensive surgical intervention.</p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">In addition to fat and gland removal, skin excision may be necessary to achieve optimal chest contour.</p>
                <div className="bg-amber-400/10 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                  <p className="text-slate-700"><strong>Important:</strong> Grade 3 benefits most from Dr. Jain's expertise in combining multiple techniques for natural-looking results.</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/grades/grade 3.jpeg" alt="Grade 3 Gynecomastia" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img src="/grades/grade 3 side.jpeg" alt="Grade 3 side view" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>Comprehensive Treatment</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">Complete approach combining fat removal, gland excision, and skin tightening for optimal results.</p>
                <ul className="space-y-3 text-slate-600">
                  {["Advanced fat removal", "Gland excision", "Skin tightening", "Natural chest definition"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={250}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Expert Technique", desc: "Dr. Jain's specialized approach ensures optimal results for complex cases" },
                { title: "Natural Results", desc: "Comprehensive treatment creates masculine chest contour" },
                { title: "Long-lasting", desc: "Permanent correction with proper post-operative care" },
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
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Transform Your Life Today</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Schedule a consultation with Dr. Vicky Jain to explore your treatment options.</p>
            <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}




