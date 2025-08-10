import React from 'react'
import api from '../api/api'

export default function Download() {
  const [files, setFiles] = React.useState([])

  React.useEffect(() => {
    // For now, fetch from /api/files if backend exists. Otherwise, show sample.
    const fetchFiles = async () => {
      try {
        const res = await api.get('/files')
        setFiles(res.data)
      } catch (err) {
        setFiles([
          { id: 1, name: 'halemind-desktop-setup.exe', version: '1.0.0', size: '45 MB' }
        ])
      }
    }
    fetchFiles()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Downloads</h2>
      <div className="space-y-4">
        {files.map(f => (
          <div key={f.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{f.name}</div>
              <div className="text-sm text-gray-500">Version {f.version} • {f.size}</div>
            </div>
            <a href={f.url || '#'} className="px-4 py-2 bg-indigo-600 text-white rounded">Download</a>
          </div>
        ))}
      </div>
    </div>
  )
}
