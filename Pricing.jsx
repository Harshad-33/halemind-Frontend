import React from 'react'

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-xl">Free</h3>
          <p className="text-sm text-gray-600">Basic features for evaluation.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-xl">Professional</h3>
          <p className="text-sm text-gray-600">Advanced features, support, and integrations.</p>
        </div>
      </div>
    </div>
  )
}
