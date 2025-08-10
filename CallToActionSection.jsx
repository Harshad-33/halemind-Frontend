import React from 'react'
import GetStartedModal from './GetStartedModal'
import { Link } from 'react-router-dom'

export default function CallToActionSection() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className="mt-12 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to transform care delivery?</h2>
          <p className="text-white/90 mb-6">Join early adopters using our tools to speed up clinical workflows and reduce errors.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setOpen(true)} className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold">Get Started</button>
            <Link to="/download" className="border border-white px-6 py-3 rounded text-white">Download</Link>
          </div>
        </div>
      </div>

      <GetStartedModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
