import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
}) => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const newRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    
    newRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
    };

    newRecognition.onend = () => {
      setIsListening(false);
    };

    setRecognition(newRecognition);

    return () => {
      newRecognition.stop();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      recognition?.start();
      setIsListening(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
    >
      <div className="max-w-4xl mx-auto flex gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={disabled}
          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button
          type="button"
          onClick={toggleListening}
          className={`rounded-lg px-4 py-2 text-white ${isListening ? 'bg-red-500' : 'bg-green-500'} hover:${isListening ? 'bg-red-600' : 'bg-green-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
        >
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
        <button
          type="submit"
          disabled={disabled || !message.trim()}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};