import React from 'react'
import Sidebar from '../../Components/chatPageComponents/Sidebar'
import MessageContainer from '../../Components/chatPageComponents/MessageContainer'

const ChatPage = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default ChatPage
