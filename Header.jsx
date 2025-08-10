import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">Halemind</Link>
        <nav className="space-x-4">
          <Link to="/features" className="text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/download" className="text-gray-700 hover:text-blue-600">Download</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </nav>
      </div>
    </header>
  )
}
