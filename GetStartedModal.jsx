import React from 'react'

export default function GetStartedModal({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
        <h3 className="text-xl font-semibold mb-4">Create an account</h3>
        <p className="mb-4 text-sm text-gray-600">Sign up to access demo downloads and admin features.</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded border">Close</button>
        </div>
      </div>
    </div>
  )
}
