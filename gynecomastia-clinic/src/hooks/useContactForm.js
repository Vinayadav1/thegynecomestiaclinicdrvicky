import { useState } from "react"

// After deploying Google Apps Script, paste your Web App URL here:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4Qjns2YDb0vi86-5kTzVjkAL5c_OaImqpubvz1BylQKkQvZQigb2DF5qa_DCl_BRW/exec"

export default function useContactForm(source = "Website") {
  const [form, setForm] = useState({ name: "", phone: "", email: "", age: "", message: "", date: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.phone.trim()) e.phone = "Phone is required"
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number"
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email"
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      // GET with query params — most reliable with Google Apps Script + no-cors
      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        email: form.email || "",
        age: form.age || "",
        message: form.message || "",
        source,
      })
      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      })
    } catch (err) {
      console.error("Form submission error:", err)
    }
    setLoading(false)
    setSubmitted(true)
    setForm({ name: "", phone: "", email: "", age: "", message: "", date: "" })
  }

  return { form, errors, submitted, loading, handleChange, handleSubmit }
}
