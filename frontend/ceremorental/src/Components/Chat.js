import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Layout from './Layout';
// import "../style/Chat.css";

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });

    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (event) => {
    setMessage(event.target.value);
  };

  const onMessageSubmit = (event) => {
    event.preventDefault();
    const name = 'User'; // Replace with actual user name

    socketRef.current.emit('message', { name, message });
    setMessage('');
  };

  return (
    <Layout>
      <div>
        <h1>Live Chat</h1>
        <form onSubmit={onMessageSubmit}>
          <input name="message" onChange={onTextChange} value={message} label="Message" />
          <button>Send</button>
        </form>
        <div>
          {chat.map(({ name, message }, index) => (
            <div key={index}>
              <h3>
                {name}: <span>{message}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;