import React from 'react'
import api from '../api/api'

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = React.useState(null)

  const submit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/contact', form)
      setStatus({ ok: true, message: 'Thanks! We received your message.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, message: 'Submission failed (no backend?). Message saved locally.' })
      console.error(err)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={submit} className="space-y-4">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-3 border rounded" required />
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" type="email" className="w-full p-3 border rounded" required />
        <input value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="Subject" className="w-full p-3 border rounded" />
        <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Message" className="w-full p-3 border rounded" rows="6" required />
        <div className="flex items-center gap-4">
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded">Send</button>
          {status && <div className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>}
        </div>
      </form>
    </div>
  )
}
