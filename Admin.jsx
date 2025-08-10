import React from 'react'
import api from '../api/api'

export default function Admin() {
  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get('/admin/contacts')
        setContacts(res.data)
      } catch (err) {
        setContacts([])
      }
    }
    fetch()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard (stub)</h2>
      <p className="text-sm text-gray-600 mb-4">This admin view attempts to load /api/admin/contacts. Without a backend it will be empty.</p>
      <div className="space-y-4">
        {contacts.length === 0 ? (
          <div className="p-6 bg-white rounded shadow text-gray-600">No contacts (or backend not connected).</div>
        ) : contacts.map(c => (
          <div key={c.id} className="p-4 bg-white rounded shadow">
            <div className="font-semibold">{c.name} ({c.email})</div>
            <div className="text-sm text-gray-500">{c.message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
