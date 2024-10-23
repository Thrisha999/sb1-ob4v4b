import React from 'react';
import { Code2 } from 'lucide-react';

interface RuleInputProps {
  ruleString: string;
  onChange: (value: string) => void;
}

const RuleInput: React.FC<RuleInputProps> = ({ ruleString, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Rule String</label>
      <div className="mt-1">
        <textarea
          rows={3}
          className="shadow-sm block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={ruleString}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your rule string here..."
        />
      </div>
    </div>
  );
};

export default RuleInput;