import React, { useState, useEffect, useRef } from 'react';
import './ChatPage.css';


const users = [
  { id: 1, name: 'User1', status: 'offline' },
  { id: 2, name: 'User2', status: 'offline' },
  { id: 3, name: 'User3', status: 'offline' },
  { id: 4, name: 'User4', status: 'offline' },
];

const ChatPage = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Create a ref for the messages container
  const messagesContainerRef = useRef(null);

  // Scroll to the bottom whenever the messages array updates
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleStartChat = () => {
    // Find all online users
    const onlineUsers = users.filter(user => user.status === 'online');
    
    if (onlineUsers.length > 0) {
      // Randomly select one online user
      const randomUser = onlineUsers[Math.floor(Math.random() * onlineUsers.length)];
      setSelectedUser(randomUser);
      setIsChatOpen(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Sorry, currently no one is online.');
    }
  };

  const handleEndChat = () => {
    setIsChatOpen(false);
    setSelectedUser(null);
    setMessages([]);  // Clear chat messages when the chat ends
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  // Filter the online users
  const onlineUsersCount = users.filter(user => user.status === 'online').length;

  return (
    <div className="chat-page">
      <div className="user-list">
        <h3>Online Users</h3>
         <h2>{onlineUsersCount}</h2>
        {onlineUsersCount === 0 && <p>No users are online right now.</p>}
      </div>

      <div className="chat-area">
        {/* Always show Start Chat button initially */}
        {!isChatOpen && (
          <button className="start-chat" onClick={handleStartChat}>
            Start Chat
          </button>
        )}

        {selectedUser ? (
          <>
            <div className="chat-header">
              <h3>Chat with {selectedUser.name}</h3>
            </div>

            {isChatOpen ? (
              <>
                <div className="messages" ref={messagesContainerRef}>
                  {messages.map((msg, index) => (
                    <div key={index} className="message">
                      <strong>{msg.sender}: </strong>
                      <span>{msg.text}</span>
                    </div>
                  ))}
                </div>
                <div className="message-input">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                  />
                  <button onClick={handleSendMessage}>Send</button>
                </div>
                <button className="end-chat" onClick={handleEndChat}>
                  End Chat
                </button>
              </>
            ) : (
              <button className="start-chat" onClick={handleStartChat}>
                Start Chat
              </button>
            )}
          </>
        ) : (
          <div>{errorMessage || 'Click Start Chat to begin'}</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
