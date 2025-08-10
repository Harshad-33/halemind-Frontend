import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold mb-2">Clinical Decision Support</h4>
            <p className="text-sm text-gray-600">Evidence-driven recommendations integrated into workflows.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold mb-2">Integration</h4>
            <p className="text-sm text-gray-600">Connect with EHR systems and standards.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold mb-2">Analytics</h4>
            <p className="text-sm text-gray-600">Track usage and outcomes with dashboards.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
