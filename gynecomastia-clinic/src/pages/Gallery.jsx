import PageHero from "../components/PageHero"
import FadeIn from "../components/FadeIn"
import ConsultationModal from "../components/ConsultationModal"
import useModal from "../hooks/useModal"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import { GYN_IMAGES } from "../utils/constants"

const cases = [
  { procedure: "Advanced Techniques + Gland Excision", age: 28, result: "Excellent Result", beforeImg: "/before-after/Before-1.jpg", afterImg: "/before-after/after-1.jpg" },
  { procedure: "Combination Procedure", age: 35, result: "Natural Contour", beforeImg: "/before-after/Before-2.jpg", afterImg: "/before-after/after-2.jpg" },
  { procedure: "Advanced Techniques", age: 24, result: "Minimal Scarring", beforeImg: "/before-after/Before-3.png", afterImg: "/before-after/after-3.png" },
]

export default function Gallery() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero title="Results Gallery" subtitle="Real Transformations, Real Confidence" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-teal-500 font-semibold text-lg mb-4">2000+ SUCCESSFUL TRANSFORMATIONS</p>
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Before &amp; After Results</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Each patient journey is unique. Dr. Vicky Jain ensures natural-looking results tailored to your body type and goals.</p>
            </div>
            <div className="bg-amber-400/10 border-l-4 border-amber-400 p-6 rounded-r-2xl mb-12">
              <p className="text-slate-700"><strong>Note:</strong> Individual results may vary depending on age, skin elasticity, grade of gynecomastia, and post-operative care.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {cases.map(({ procedure, age, result, beforeImg, afterImg }, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="overflow-hidden h-64">
                    <BeforeAfterSlider beforeImage={beforeImg} afterImage={afterImg} alt={`Case ${i + 1}`} />
                  </div>
                  <div className="p-6">
                    <p className="text-slate-500 text-sm mb-3">{procedure}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Age: {age}</span>
                      <span className="text-teal-500 font-bold text-sm bg-teal-500/10 px-3 py-1 rounded-full">{result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-3xl p-12 text-center mb-16" style={{ background: "#0a1628" }}>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Schedule a confidential consultation with Dr. Vicky Jain.</p>
              <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Gynecomastia Grades</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Understanding different grades of gynecomastia and their treatment approaches.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                {num:'I',desc:'Small enlargement, no excess skin. Treated with liposuction alone.',color:'teal',img:'/grades/grade 1.jpeg'},
                {num:'II',desc:'Moderate enlargement. Requires combination of liposuction and gland excision.',color:'teal',img:'/grades/grade 2.jpeg'},
                {num:'III',desc:'Moderate to severe enlargement with excess skin. May require skin excision.',color:'amber',img:'/grades/grade 3.jpeg'},
                {num:'IV',desc:'Severe enlargement with significant excess skin. Requires comprehensive surgery.',color:'amber',img:'/grades/grade 4.jpeg'}
              ].map(({num,desc,color,img})=>(
                <div key={num} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={img} alt={`Grade ${num} Gynecomastia`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-6">
                    <div className={`w-12 h-12 ${color==='teal'?'bg-teal-500/10':'bg-amber-400/10'} rounded-xl flex items-center justify-center mb-4`}>
                      <span className={`text-2xl font-bold ${color==='teal'?'text-teal-500':'text-amber-600'}`}>{num}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{color:'#0a1628'}}>Grade {num}</h3>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>More Patient Results</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {GYN_IMAGES.slice(9, 17).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <img src={img} alt={`Patient result ${i + 10}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>What Makes Our Results Different?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Natural Appearance", desc: "Results that look like you were born with a masculine chest.", color: "teal" },
                { title: "Minimal Scarring", desc: "Advanced techniques ensure scars are virtually invisible.", color: "amber" },
                { title: "Long-Lasting Results", desc: "Permanent correction with proper post-operative care.", color: "teal" },
              ].map(({ title, desc, color }) => (
                <div key={title} className="text-center">
                  <div className={`w-20 h-20 ${color === "teal" ? "bg-teal-500/10" : "bg-amber-400/10"} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <svg className={`w-10 h-10 ${color === "teal" ? "text-teal-500" : "text-amber-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
