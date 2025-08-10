import React from 'react'
import { Link } from 'react-router-dom'
import CallToActionSection from './CallToActionSection'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Modern clinical decision support, reimagined</h1>
        <p className="mb-6 text-lg max-w-3xl mx-auto">Powerful tools to help clinicians make faster, safer decisions. Built for hospitals, clinics, and care teams.</p>
        <div className="flex justify-center gap-4">
          <Link to="/download" className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold">Try Free</Link>
          <Link to="/contact" className="border border-white px-6 py-3 rounded">Request a Demo</Link>
        </div>
      </div>

      <CallToActionSection />
    </section>
  )
}
