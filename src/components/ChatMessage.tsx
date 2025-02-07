import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.role === 'assistant';

  return (
    <div className={`flex w-full ${isAI ? 'justify-start' : 'justify-end'} my-2`}>
      {/* AI Avatar (Left) */}
      {isAI && (
        <div className="flex-shrink-0 mr-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <Bot size={20} />
          </div>
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`p-3 rounded-lg text-sm shadow-md 
          max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] 
          ${
            isAI
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-start'
              : 'bg-blue-500 text-white self-end'
          }`}
      >
        {/* Sender Name & Timestamp */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span className="font-medium">{isAI ? 'AI Assistant' : 'You'}</span>
          <span>{formatDistanceToNow(message.timestamp, { addSuffix: true })}</span>
        </div>

        {/* Message Content */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </p>
        </div>
      </div>

      {/* User Avatar (Right) */}
      {!isAI && (
        <div className="flex-shrink-0 ml-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
            <User size={20} />
          </div>
        </div>
      )}
    </div>
  );
};
