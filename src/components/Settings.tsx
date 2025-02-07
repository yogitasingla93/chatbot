import { useState } from 'react';

interface SettingsProps {
  onToggleTheme: () => void;
  speechEnabled: boolean;
  setSpeechEnabled: (enabled: boolean) => void;
}

export function Settings({ onToggleTheme, speechEnabled, setSpeechEnabled }: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Settings Panel */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md"
      >
        ⚙️
      </button>

      {/* Settings Panel (Only shown when isOpen is true) */}
      {isOpen && (
        <div className="fixed top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-80 z-50">
          <h2 className="text-lg font-semibold dark:text-white">Settings</h2>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="mt-2 w-full p-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Toggle Theme
          </button>

          {/* Speech Recognition Toggle */}
          <label className="flex items-center justify-between mt-2 w-full p-2 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-pointer">
            <span className="text-sm">Enable Speech</span>
            <input
              type="checkbox"
              checked={speechEnabled}
              onChange={(e) => setSpeechEnabled(e.target.checked)}
              className="w-4 h-4"
            />
          </label>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-3 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
