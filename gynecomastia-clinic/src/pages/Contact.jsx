import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import useContactForm from '../hooks/useContactForm'
import { CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL, MAPS_LINK, MAPS_EMBED } from '../utils/constants'

export default function Contact() {
  const { form, errors, submitted, loading, handleChange, handleSubmit } = useContactForm()
  return (
    <>
      <PageHero title="Get In Touch" subtitle="Schedule Your Consultation Today" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-teal-500 font-semibold text-lg mb-4">WE ARE HERE TO HELP</p>
              <h2 className="text-4xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Multiple Ways to Reach Us</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Whether you prefer to call, email, or visit in person, we are ready to answer your questions.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#0a1628'}}>Visit Our Clinic</h3>
                <p className="text-slate-600 text-sm mb-4">{CLINIC_ADDRESS}</p>
                <a className="text-teal-500 font-bold hover:underline text-sm" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#0a1628'}}>Call Us</h3>
                <p className="text-slate-600 text-sm mb-4">Mon-Sat: 10 AM - 8 PM</p>
                <a className="text-2xl font-serif font-bold hover:text-teal-500" style={{color:'#0a1628'}} href={`tel:${CLINIC_PHONE}`}>{CLINIC_PHONE}</a>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#0a1628'}}>Email Us</h3>
                <p className="text-slate-600 text-sm mb-4">We will respond within 24 hours</p>
                <a className="text-teal-500 font-bold hover:underline break-all text-sm" href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="min-h-[400px] lg:min-h-[600px]">
                <iframe src={MAPS_EMBED} width="100%" height="100%" style={{border:0,borderRadius:'1.5rem'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="shadow-xl w-full min-h-[400px]" title="Clinic Map" />
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-serif font-bold mb-6" style={{color:'#0a1628'}}>Book Your Consultation</h3>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2" style={{color:'#0a1628'}}>Request Submitted!</h4>
                    <p className="text-slate-600">We will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {[{name:'name',label:'Full Name *',type:'text',placeholder:'Enter your name'},{name:'phone',label:'Phone Number *',type:'tel',placeholder:'+91 XXXXX XXXXX'},{name:'email',label:'Email Address',type:'email',placeholder:'your@email.com'},{name:'age',label:'Age',type:'number',placeholder:'Your age'}].map(({name,label,type,placeholder})=>(
                      <div key={name}>
                        <label className="block text-sm font-semibold mb-2" style={{color:'#0a1628'}} htmlFor={name}>{label}</label>
                        <input className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${errors[name]?'border-red-400':'border-slate-200 focus:border-teal-500'}`} id={name} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={handleChange} />
                        {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{color:'#0a1628'}} htmlFor="message">Tell Us About Your Concern</label>
                      <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 outline-none transition-all resize-none" id="message" name="message" rows="4" placeholder="Describe your condition..." value={form.message} onChange={handleChange} />
                    </div>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95 disabled:opacity-70" type="submit" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                    <p className="text-xs text-slate-500 text-center">Your information is kept confidential.</p>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24" style={{background:'#0a1628'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Prefer to Talk Directly?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Our team is available to answer your questions and schedule your consultation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${CLINIC_PHONE}`} className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Now
              </a>
              <a href="https://wa.me/919619489446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656z"/></svg>
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}


