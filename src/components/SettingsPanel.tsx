import React from 'react';

interface SettingsProps {
  onClose: () => void;
  onToggleTheme: () => void;
  speechEnabled: boolean;
  setSpeechEnabled: (enabled: boolean) => void;
}

export const SettingsPanel: React.FC<SettingsProps> = ({
  onClose,
  onToggleTheme,
  speechEnabled,
  setSpeechEnabled,
}) => {
  return (
    <div className="fixed top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-80 z-50 border dark:border-gray-700">
      <h3 className="text-lg font-semibold dark:text-white">Settings</h3>

      {/* Speech Recognition Toggle */}
      <label className="flex items-center justify-between mt-2 p-2 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-pointer">
        <span className="text-sm">Enable Speech</span>
        <input
          type="checkbox"
          checked={speechEnabled}
          onChange={(e) => setSpeechEnabled(e.target.checked)}
          className="w-4 h-4"
        />
      </label>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="mt-2 w-full p-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        Toggle Dark Mode
      </button>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="mt-3 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Close
      </button>
    </div>
  );
};
