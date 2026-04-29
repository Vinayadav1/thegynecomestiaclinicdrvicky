import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { DOCTOR_IMAGE, DOCTOR_IMAGE_2, STATS, TESTIMONIALS, MAPS_EMBED, GYN_IMAGES, ABOUT_CONTENT } from "../utils/constants"
import useContactForm from "../hooks/useContactForm"
import useModal from "../hooks/useModal"
import FadeIn from "../components/FadeIn"
import ConsultationModal from "../components/ConsultationModal"

function Stars({ count = 5, size = "w-5 h-5" }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`${size} text-amber-400`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function BeforeAfterSlider({ before, after, label }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const dragging = useRef(false)
  const getPos = (clientX) => {
    const rect = ref.current.getBoundingClientRect()
    return Math.max(0, Math.min(((clientX - rect.left) / rect.width) * 100, 100))
  }
  useEffect(() => {
    const up = () => { dragging.current = false }
    window.addEventListener("mouseup", up)
    return () => window.removeEventListener("mouseup", up)
  }, [])
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
      <div ref={ref} className="relative overflow-hidden select-none bg-white" style={{ aspectRatio: '16/10' }}
        onMouseMove={e => { if (dragging.current) setPos(getPos(e.clientX)) }}
        onTouchMove={e => setPos(getPos(e.touches[0].clientX))}>
        <div className="absolute inset-0">
          <img src={before} alt="Before" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={after} alt="After" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10" style={{ left: `${pos}%` }}
          onMouseDown={() => { dragging.current = true }}
          onTouchStart={() => { dragging.current = true }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-slate-500 font-medium">Before Surgery</span>
          <div className="flex-1 mx-4 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 w-full" />
          </div>
          <span className="text-teal-500 font-bold">After Surgery</span>
        </div>
        <p className="text-center text-slate-600 mt-2 text-sm font-medium">{label}</p>
        <p className="text-center text-slate-400 text-xs mt-1 italic">* Images captured immediately post-surgery</p>
      </div>
    </div>
  )
}

export default function Home() {
  const { form, errors, submitted, loading, handleChange, handleSubmit } = useContactForm()
  const modal = useModal()
  const sliders = [
    { before: '/before-after/Before-1.jpg', after: '/before-after/after-1.jpg', label: 'Grade 2 Gynecomastia' },
    { before: '/before-after/Before-2.jpg', after: '/before-after/after-2.jpg', label: 'Grade 3 Gynecomastia' },
    { before: '/before-after/Before-3.png', after: '/before-after/after-3.png', label: 'Pseudo Gynecomastia' },
  ]
  return (
    <>
      <ConsultationModal isOpen={modal.isOpen} onClose={modal.close} />
      {/* HERO - not lazy, loads immediately */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12" style={{ background: "#0a1628" }}>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 opacity-20 filter blur-[80px] rounded-full animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-400 opacity-10 filter blur-[80px] rounded-full animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 opacity-10 filter blur-[80px] rounded-full animate-blob animation-delay-4000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-teal-400 text-sm font-bold tracking-wide uppercase">India's Leading Gynecomastia Clinic</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Transform Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-300">Confidence Today</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
                Experience world-class surgical excellence with <strong>Dr. Vicky Jain</strong>, a premier Board Certified Plastic Surgeon specializing in advanced, scar-less gynecomastia correction.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={modal.open} className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl">
                  Get Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
                <a href="#results" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold transition-all">View Results</a>
              </div>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div><p className="text-3xl font-serif font-bold text-white">2000+</p><p className="text-slate-400 text-sm">Surgeries Done</p></div>
                <div><p className="text-3xl font-serif font-bold text-teal-400">17+</p><p className="text-slate-400 text-sm">Years Experience</p></div>
                <div><p className="text-3xl font-serif font-bold text-amber-400">98%</p><p className="text-slate-400 text-sm">Success Rate</p></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative flex flex-col justify-center">
              <div className="relative mx-auto" style={{ width: "fit-content" }}>
                <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500 to-amber-400 rounded-3xl blur opacity-30" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img alt="Dr. Vicky Jain - Board Certified Plastic Surgeon" className="block rounded-3xl" style={{ maxHeight: "520px", width: "auto" }} src={DOCTOR_IMAGE} loading="eager" />
                  <div className="absolute bottom-0 left-0 w-full p-6" style={{ background: "linear-gradient(to top, #0a1628, transparent)" }}>
                    <p className="text-white font-serif text-2xl font-bold">Dr. Vicky Jain</p>
                    <p className="text-teal-400 font-medium">Board Certified Plastic Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl border border-white/20 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-400 p-2 rounded-full">
                    <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">M.Ch Plastic Surgery</p>
                    <p className="text-slate-400 text-xs">Top Rated Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-slate-50 overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative flex flex-col">
              <div className="rounded-3xl overflow-hidden shadow-2xl flex-1">
                <img alt="Dr. Vicky Jain" className="w-full h-full object-contain object-top block" style={{ maxHeight: "100%" }} src={DOCTOR_IMAGE_2} loading="lazy" />
              </div>
              <div className="absolute -bottom-10 right-4 md:right-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px]">
                <p className="text-teal-500 font-bold text-lg">2k+</p>
                <p className="text-slate-900 font-bold leading-tight">Patients restored their confidence</p>
                <p className="text-slate-500 text-sm mt-1">Verified Results</p>
              </div>
            </div>
            <div>
              <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Our Commitment</h2>
              <h3 className="text-4xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Dedicated to Your Confidence &amp; Personal Care</h3>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">{ABOUT_CONTENT.clinicAbout}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {ABOUT_CONTENT.whyChoose.map(({ title, desc }) => (
                  <div key={title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2" style={{ color: "#0a1628" }}>{title}</h4>
                    <p className="text-slate-500 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>Why Choose Dr. Vicky Jain?</h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6" />
            <p className="text-slate-600">Trust your body with a surgeon who has dedicated his career to mastering the complexities of male chest contouring.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[{ title: "Surgical Expertise", desc: "Over 17 years of experience in plastic and reconstructive surgery with a focus on high-precision gynecomastia removal.", color: "teal" }, { title: "Personalized Care", desc: "Every patient receives a customized surgical plan tailored to their specific Grade of gynecomastia and body goals.", color: "amber" }, { title: "Advanced Techniques", desc: "Utilizing the latest advanced surgical techniques and power-assisted methods for smoother, more masculine contouring results.", color: "teal" }, { title: "Natural Results", desc: "Our philosophy is 'Invisible Surgery'—leaving minimal to no visible scarring while ensuring a naturally flat chest.", color: "amber" }].map(({ title, desc, color }) => (
              <div key={title} className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-navy transition-all duration-500 overflow-hidden">
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${color === "teal" ? "bg-teal-500/10" : "bg-amber-400/10"} rounded-full group-hover:scale-150 transition-transform duration-700`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${color === "teal" ? "bg-teal-500" : "bg-amber-400"} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors" style={{ color: "#0a1628" }}>{title}</h4>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 md:py-20 bg-slate-50" id="results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3" style={{ color: "#0a1628" }}>Real Transformations, Real Results</h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-4" />
            <p className="text-slate-600">See the life-changing results achieved by our patients. Drag the slider to compare before and after images.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sliders.map(s => <BeforeAfterSlider key={s.label} {...s} />)}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-amber-800 text-sm">
              <span className="font-semibold">⚠️ Disclaimer:</span> These images were captured immediately before and after surgery on the same day. Final results continue to improve over the following weeks as swelling subsides. Individual results may vary.
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 relative" style={{ background: "#0a1628" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {STATS.map(({ value, label }) => (
              <div key={label} className="glass-effect p-8 rounded-3xl text-center border border-white/5 hover:border-teal-500/30 transition-all group">
                <p className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2">{value}</p>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">{label}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Stars size="w-6 h-6" />
              <span className="text-2xl font-bold" style={{ color: "#0a1628" }}>4.9</span>
            </div>
            <p className="text-slate-500 text-sm">96% Recommended · Based on verified patient reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, city, initial, text, rating }) => (
              <div key={name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed text-sm">{text}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{initial}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{name}</p>
                    <p className="text-xs text-slate-500">{city} · Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#0a1628" }}>THE GYNECOMASTIA CLINIC</h2>
            <p className="text-xl text-slate-600">Visit Us at Our Mumbai Location</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="h-full min-h-[400px] lg:min-h-[600px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
              <iframe src={MAPS_EMBED} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full min-h-[400px]" title="Clinic Location" />
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "#0a1628" }}>Get in Touch</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#0a1628" }}>Message Sent!</h4>
                  <p className="text-slate-600">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {[{ name: "name", label: "Full Name *", type: "text", placeholder: "Enter your name" }, { name: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" }, { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" }].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a1628" }}>{label}</label>
                      <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} className={`w-full px-4 py-3 border rounded-lg outline-none transition-all ${errors[name] ? "border-red-400" : "border-slate-300 focus:border-teal-500"}`} />
                      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#0a1628" }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows="3" placeholder="Tell us about your concerns..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg active:scale-95 disabled:opacity-70">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}



