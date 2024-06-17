import React from 'react';
import '../estilos/chat.css';

const Chat = () => {
  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat CR</h2>
      <div className="chat-box">
        <div className="messages">
          <div className="message bot-message">Olá! Como posso ajudar você hoje?</div>
          {/* Adicione aqui as mensagens do chat */}
        </div>
        <div className="input-container">
          <input type="text" placeholder="Digite sua mensagem..." className="chat-input" />
          <button className="send-button">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
