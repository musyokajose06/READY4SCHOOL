import { useEffect } from 'react'

export default function Toast({ visible, message, type = 'success', duration = 5000, onClose }) {
  useEffect(() => {
    if (!visible) return
    const id = setTimeout(() => {
      onClose && onClose()
    }, duration)
    return () => clearTimeout(id)
  }, [visible, duration, onClose])

  if (!visible) return null

  const bg = type === 'error' ? 'bg-red-600' : 'bg-green-600'

  return (
    <div className={`fixed top-6 right-6 z-50 ${bg} text-white px-4 py-2 rounded shadow-lg`}>
      {message}
    </div>
  )
}
