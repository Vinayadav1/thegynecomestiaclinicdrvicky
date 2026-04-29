import PageHero from '../components/PageHero'
import ConsultationModal from '../components/ConsultationModal'
import useModal from '../hooks/useModal'
import FadeIn from '../components/FadeIn'
import { DOCTOR_IMAGE_2, ABOUT_CONTENT, TESTIMONIALS } from '../utils/constants'
import { Link } from 'react-router-dom'

function StarIcon() {
  return <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
}

export default function About() {
  const modal = useModal()
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      <PageHero title="About Dr. Vicky Jain" subtitle="India's Leading Gynecomastia Surgeon with 17+ Years of Excellence" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-20">
              <div className="flex flex-col">
                <img src={DOCTOR_IMAGE_2} alt="Dr. Vicky Jain" className="rounded-2xl shadow-2xl w-full h-full object-contain object-top" loading="lazy" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold" style={{color:'#0a1628'}}>Meet Dr. Vicky Jain</h2>
                <p className="text-lg text-slate-700 leading-relaxed">Dr. Vicky Jain, a leading plastic surgeon in Mumbai, India, specializes in gynecomastia surgery. With a focus on precision and aesthetic balance, Dr. Jain is renowned for his exceptional results. His dedication to excellence and patient care has made him a top choice for male breast surgery.</p>
                <p className="text-lg text-slate-700 leading-relaxed">Dr. Vicky Jain is a highly accomplished Board-Certified Plastic Surgeon with over 17 years of specialized experience in gynecomastia surgery. With more than 2000 successful procedures, Dr. Jain has established himself as India's foremost authority in male breast reduction surgery.</p>
                <p className="text-lg text-slate-700 leading-relaxed">{ABOUT_CONTENT.clinicAbout}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center" style={{color:'#0a1628'}}>Why Choose Dr. Vicky Jain?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {ABOUT_CONTENT.whyChoose.map(({title,desc}) => (
                  <div key={title} className="bg-slate-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4" style={{color:'#0a1628'}}>{title}</h3>
                    <p className="text-slate-700 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Our Philosophy</h2>
              <p className="text-lg text-slate-700 leading-relaxed">At The Gynecomastia Clinic, we believe in providing specialized care for men's health. Our approach combines medical excellence with compassionate understanding.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{title:'Safety First',desc:'Your safety is our top priority. We follow the highest medical standards.'},{title:'Patient-Centered',desc:'We listen to your concerns and work with you to achieve your desired results.'},{title:'Excellence',desc:'We strive for perfection in every procedure, delivering exceptional outcomes.'}].map(({title,desc}) => (
                <div key={title} className="text-center">
                  <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{color:'#0a1628'}}>{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-16" style={{color:'#0a1628'}}>Qualifications &amp; Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[{title:'M.Ch Plastic Surgery',desc:'Advanced surgical training from premier medical institutions.'},{title:'Board Certified',desc:'Certified by leading medical boards, ensuring the highest standards of care.'},{title:'17+ Years Experience',desc:'Extensive experience in plastic and aesthetic surgery.'}].map(({title,desc}) => (
                <div key={title} className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4" style={{color:'#0a1628'}}>{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl p-12 text-center" style={{background:'#0a1628'}}>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Experience the Difference</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Dr. Vicky Jain's expertise and dedication have transformed the lives of over 2000 patients.</p>
              <button onClick={modal.open} className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">Schedule Consultation</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-16" style={{color:'#0a1628'}}>What Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0,3).map(({text,name,city,initial,rating}) => (
                <div key={name} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                  <div className="flex gap-1 mb-3">{Array.from({length:rating}).map((_,i)=><svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
                  <p className="text-slate-700 mb-4 text-sm leading-relaxed">{text}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{initial}</div>
                    <div><p className="font-semibold text-sm" style={{color:'#0a1628'}}>{name}</p><p className="text-xs text-slate-500">{city} · Verified Patient</p></div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}



