import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickRepliesProps {
  suggestions: string[];
  onSelect: (message: string) => void;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;

  return (
    <div className="p-2 flex gap-2 overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          variant="outline"
          className="whitespace-nowrap text-sm"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};
