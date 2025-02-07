import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { useChatStore } from './store/chatStore';
import { initializeAI, generateResponse } from './services/ai';
import { SettingsPanel } from './components/SettingsPanel';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
initializeAI(GEMINI_API_KEY);

function App() {
  const { messages, isTyping, addMessage, setIsTyping, isDarkMode, speechEnabled, setSpeechEnabled, toggleDarkMode } =
    useChatStore();
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    addMessage(message, 'user');
    setIsTyping(true);

    try {
      const response = await generateResponse(message);
      addMessage(response, 'assistant');
    } catch (error) {
      addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        
        {/* Toggle Settings Button */}
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md"
        >
          ⚙️
        </button>

        {/* Render SettingsPanel only when toggled */}
        {isSettingsOpen && (
          <SettingsPanel
            onClose={() => setIsSettingsOpen(false)}
            onToggleTheme={toggleDarkMode}
            speechEnabled={speechEnabled}
            setSpeechEnabled={setSpeechEnabled}
          />
        )}

        <main className="flex-1 overflow-y-auto max-w-4xl mx-auto divide-y dark:divide-gray-700">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </main>

        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;
