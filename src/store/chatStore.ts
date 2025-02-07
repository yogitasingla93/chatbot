import { create } from 'zustand';

interface ChatStore {
  messages: { id: string; role: 'user' | 'assistant'; content: string; timestamp: Date }[];
  isTyping: boolean;
  isDarkMode: boolean;
  speechEnabled: boolean;
  addMessage: (message: string, role: 'user' | 'assistant') => void;
  setIsTyping: (typing: boolean) => void;
  toggleDarkMode: () => void;
  setSpeechEnabled: (enabled: boolean) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isTyping: false,
  isDarkMode: false,
  speechEnabled: false, // Now part of global state
  addMessage: (message, role) =>
    set((state) => ({
      messages: [...state.messages, { id: Date.now().toString(), role, content: message, timestamp: new Date() }],
    })),
  setIsTyping: (typing) => set({ isTyping: typing }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setSpeechEnabled: (enabled) => set({ speechEnabled: enabled }), // Update speech state
}));
