import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Send, MapPin } from 'lucide-react'; // Icons for UI

const ISUGeoBotGUI = () => {
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I am ISU-GeoBot. How can I help you navigate the Echague campus or find a faculty member today?", 
      sender: "bot" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Coordinates for ISU Echague Main Campus (Approximate starting center)
  const isuEchagueCenter = [16.7042, 121.6186]; 

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: inputMessage, sender: "user" }]);

    // TODO: Connect this to your Node.js/Express backend to route to RAG or Random Forest
    setInputMessage("");
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* LEFT PANEL: Interactive Campus Map using Leaflet.js */}
      <div style={{ flex: 2, position: 'relative' }}>
        <MapContainer 
          center={isuEchagueCenter} 
          zoom={16} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Example Marker - You will populate this via your Geospatial Database later */}
          <Marker position={isuEchagueCenter}>
            <Popup>
              <strong>ISU Echague Main Campus</strong><br />
              Welcome to the University!
            </Popup>
          </Marker>
        </MapContainer>

        {/* Map Overlay Title */}
        <div style={{ 
          position: 'absolute', 
          top: 10, 
          left: 50, 
          zIndex: 1000, 
          backgroundColor: 'white', 
          padding: '10px', 
          borderRadius: '5px', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
        }}>
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={24} color="#1b4d3e" />
            ISU-GeoBot Navigation
          </h2>
        </div>
      </div>

      {/* RIGHT PANEL: Chatbot Interface */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        borderLeft: '1px solid #ccc', 
        backgroundColor: '#f8f9fa' 
      }}>
        {/* Chat Header */}
        <div style={{ padding: '20px', backgroundColor: '#1b4d3e', color: 'white' }}>
          <h3 style={{ margin: 0 }}>Campus Assistant</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>
            Powered by Enhanced RAG
          </p>
        </div>

        {/* Chat Messages Area */}
        <div style={{ 
          flex: 1, 
          padding: '20px', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px' 
        }}>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? '#1b4d3e' : '#e9ecef',
                color: msg.sender === 'user' ? 'white' : 'black',
                padding: '12px 16px',
                borderRadius: '15px',
                maxWidth: '80%'
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Area */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'white', 
          borderTop: '1px solid #ddd' 
        }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about faculty availability or locations..."
              style={{ 
                flex: 1, 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ccc' 
              }}
            />
            <button 
              type="submit" 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#1b4d3e', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px' 
              }}
            >
              <Send size={18} />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ISUGeoBotGUI;
