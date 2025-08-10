import React from 'react'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [msg, setMsg] = React.useState(null)

  const submit = (e) => {
    e.preventDefault()
    // stub: no backend auth yet
    setMsg('This is a demo login form. Connect to backend to enable auth.')
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 border rounded" />
        <button className="px-6 py-3 bg-indigo-600 text-white rounded">Login</button>
        {msg && <div className="text-sm text-gray-600 mt-2">{msg}</div>}
      </form>
    </div>
  )
}
