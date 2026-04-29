import { useState } from "react"
import useContactForm from "../hooks/useContactForm"

export default function ConsultationModal({ isOpen, onClose }) {
  const { form, errors, submitted, loading, handleChange, handleSubmit } = useContactForm()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h3 className="text-2xl font-serif font-bold" style={{ color: "#0a1628" }}>Book Consultation</h3>
            <p className="text-slate-500 text-sm mt-1">Fill in your details and we will get back to you</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: "#0a1628" }}>Request Submitted!</h4>
              <p className="text-slate-600 mb-6">We will contact you within 24 hours to confirm your appointment.</p>
              <button
                onClick={onClose}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { name: "name", label: "Full Name *", type: "text", placeholder: "Enter your name" },
                { name: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { name: "age", label: "Age", type: "number", placeholder: "Your age" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0a1628" }} htmlFor={`modal-${name}`}>{label}</label>
                  <input
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${errors[name] ? "border-red-400" : "border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"}`}
                    id={`modal-${name}`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                  />
                  {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0a1628" }} htmlFor="modal-message">Tell Us About Your Concern</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none text-sm"
                  id="modal-message"
                  name="message"
                  rows="3"
                  placeholder="Describe your condition..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95 disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Book Consultation"}
              </button>
              <p className="text-xs text-slate-400 text-center">Your information is kept confidential.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
