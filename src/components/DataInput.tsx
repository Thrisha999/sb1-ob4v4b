import React from 'react';
import type { RuleData } from '../types/rule';

interface DataInputProps {
  testData: RuleData;
  onChange: (data: RuleData) => void;
  onError: (message: string) => void;
}

const DataInput: React.FC<DataInputProps> = ({ testData, onChange, onError }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Test Data (JSON)</label>
      <div className="mt-1">
        <textarea
          rows={4}
          className="shadow-sm block w-full border border-gray-300 rounded-md p-3 font-mono text-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={JSON.stringify(testData, null, 2)}
          onChange={(e) => {
            try {
              onChange(JSON.parse(e.target.value));
            } catch {
              onError('Invalid JSON data');
            }
          }}
        />
      </div>
    </div>
  );
};

export default DataInput;