import './input.css'
import { useState } from 'react'

export default function InputTest() {
  const [status, setStatus] = useState('ok')

  function onTouch({ currentTarget }) {
    const length = currentTarget.value.length
    if (length > 20) {
      setStatus('bad')
    } else if (length > 10) {
      setStatus('warning')
    } else {
      setStatus('ok')
    }
  }

  return (
    <div>
      <input type="text" className={status} onInput={onTouch} />
    </div>
  )
}
