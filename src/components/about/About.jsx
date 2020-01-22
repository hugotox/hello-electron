import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const { ipcRenderer } = require('electron')

export const About = () => {
  const [messages, setMessages] = useState([])

  const sendMessage = useCallback(() => {
    console.log('sending a message')
    ipcRenderer.send('asynchronous-message', 'ping')
  }, [])

  useEffect(() => {
    const listener = (evt, msg) => {
      setMessages([...messages, msg])
    }

    ipcRenderer.on('asynchronous-reply', listener)

    return () => {
      ipcRenderer.removeListener('asynchronous-reply', listener)
    }
  }, [messages])

  return (
    <div className="container">
      <h1>About</h1>
      <Link to="/">Home</Link>
      <br />
      <button onClick={sendMessage}>Test message</button>
      <br />
      <br />
      <pre>
        {messages.map((message, i) => {
          return <span key={i}>{message}</span>
        })}
      </pre>
    </div>
  )
}
