import { useState } from 'react'

export default function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={() => setCount(count + 1)}
      >
        count = {count}
      </button>
    </div>
  )
}