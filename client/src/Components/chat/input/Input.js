import React from 'react'
import './Input.css'
const Input = ({message,setMessage,sendMessage}) => {
  return (
        <form action='' onSubmit={sendMessage} className="form" >
            <input type="text" className='input' value={message} placeholder='type a message' 
            onChange={event=>setMessage(event.target.value)} 
            onKeyPress={event=>event.key==='Enter'?sendMessage(event):null}
            />
            <button className='sendButton' >Send Message</button>
        </form>
  )
}

export default Input