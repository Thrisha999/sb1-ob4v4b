import React from 'react';
import { Code2, Play } from 'lucide-react';

interface ActionButtonsProps {
  onCreateRule: () => void;
  onEvaluate: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCreateRule, onEvaluate }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onCreateRule}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Code2 className="h-4 w-4 mr-2" />
        Create AST
      </button>
      <button
        onClick={onEvaluate}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <Play className="h-4 w-4 mr-2" />
        Evaluate Rule
      </button>
    </div>
  );
};

export default ActionButtons;