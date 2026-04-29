import PageHero from '../components/PageHero'
import ConsultationModal from '../components/ConsultationModal'
import useModal from '../hooks/useModal'
import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { GYN_IMAGES } from '../utils/constants'

export default function Treatments() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero title="Our Treatments" subtitle="Advanced Gynecomastia Surgery Solutions Tailored to Your Needs" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-teal-500 font-semibold text-lg mb-4">COMPREHENSIVE TREATMENT OPTIONS</p>
              <h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Understanding Gynecomastia</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Gynecomastia is the enlargement of male breast tissue. Our specialized treatments restore a masculine chest contour with natural-looking results.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {[{title:'Advanced Techniques',color:'teal',desc:'State-of-the-art surgical techniques for precise fat removal with minimal tissue trauma.',items:['Minimal scarring','Quick recovery time','Precise body contouring']},{title:'Gland Excision',color:'amber',desc:'Surgical removal of excess glandular tissue through minimal incisions.',items:['Complete gland removal','Hidden incision placement','Permanent results']},{title:'Combination Procedure',color:'teal',desc:'Combined liposuction and gland excision for comprehensive treatment.',items:['Comprehensive solution','Optimal chest contour','Natural appearance']},{title:'Skin Tightening',color:'amber',desc:'Advanced techniques for excess skin removal and chest wall contouring.',items:['Improved chest definition','Masculine contour','Long-lasting results']}].map(({title,color,desc,items}) => (
                <div key={title} className="bg-slate-50 p-10 rounded-3xl">
                  <div className={`w-16 h-16 ${color==='teal'?'bg-teal-500':'bg-amber-400'} rounded-2xl flex items-center justify-center mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4" style={{color:'#0a1628'}}>{title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">{desc}</p>
                  <ul className="space-y-3 text-slate-600">{items.map(item=><li key={item} className="flex items-start gap-2"><svg className={`w-5 h-5 ${color==='teal'?'text-teal-500':'text-amber-500'} mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg><span>{item}</span></li>)}</ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Book Consultation</button>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Gynecomastia Grades</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Understanding the grade of your condition helps determine the most effective treatment approach.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[{num:'I',desc:'Small enlargement, no excess skin. Treated with liposuction alone.',color:'teal',img:'/grades/grade 1.jpeg'},{num:'II',desc:'Moderate enlargement. Requires combination of liposuction and gland excision.',color:'teal',img:'/grades/grade 2.jpeg'},{num:'III',desc:'Moderate to severe enlargement with excess skin. May require skin excision.',color:'amber',img:'/grades/grade 3.jpeg'},{num:'IV',desc:'Severe enlargement with significant excess skin. Requires comprehensive surgery.',color:'amber',img:'/grades/grade 4.jpeg'}].map(({num,desc,color,img})=>(
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
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16"><h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Recovery Timeline</h2></div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[{label:'1-3',period:'Days 1-3',desc:'Initial recovery. Mild discomfort managed with medication. Compression garment worn continuously.',color:'teal'},{label:'1',period:'Week 1',desc:'Most patients return to light activities. Swelling begins to subside.',color:'teal'},{label:'2-4',period:'Weeks 2-4',desc:'Gradual return to normal activities. Exercise can be resumed with approval.',color:'amber'},{label:'3+',period:'3+ Months',desc:'Final results visible. Full recovery achieved.',color:'amber'}].map(({label,period,desc,color})=>(
                <div key={period} className="flex gap-6">
                  <div className="flex-shrink-0"><div className={`w-16 h-16 ${color==='teal'?'bg-teal-500':'bg-amber-400'} rounded-full flex items-center justify-center text-white font-bold text-lg`}>{label}</div></div>
                  <div><h3 className="text-xl font-bold mb-2" style={{color:'#0a1628'}}>{period}</h3><p className="text-slate-600">{desc}</p></div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16"><h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Frequently Asked Questions</h2></div>
            <div className="space-y-6">
              {[{q:'Is gynecomastia surgery painful?',a:"Performed under anesthesia, so no pain during surgery. Post-operative discomfort is mild and well-managed."},{q:'Will there be visible scars?',a:"Dr. Jain uses advanced techniques to minimize scarring. Incisions are strategically placed and fade over time."},{q:'How long do results last?',a:'Results are permanent when combined with a healthy lifestyle.'},{q:'When can I return to work?',a:'Most patients return to desk jobs within 3-5 days.'},{q:'What is the cost?',a:'Cost varies based on grade and treatment required. Schedule a consultation for a personalized quote.'}].map(({q,a})=>(
                <div key={q} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{color:'#0a1628'}}>{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}



