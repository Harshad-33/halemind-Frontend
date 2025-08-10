import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} Halemind Clone. All rights reserved.</div>
          <div className="space-x-4">
            <a className="hover:text-blue-600" href="/privacy">Privacy</a>
            <a className="hover:text-blue-600" href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
