import React from 'react'
import Sidebar from '../../Components/chatPageComponents/Sidebar'
import MessageContainer from '../../Components/chatPageComponents/MessageContainer'
import './ChatPage.css'

const ChatPage = () => {
  return (
    <div className='chatpageee'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default ChatPage
