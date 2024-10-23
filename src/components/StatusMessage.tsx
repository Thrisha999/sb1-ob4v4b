import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface StatusMessageProps {
  error?: string;
  result?: boolean | null;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ error, result }) => {
  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{error}</h3>
          </div>
        </div>
      </div>
    );
  }

  if (result !== null) {
    return (
      <div className={`rounded-md ${result ? 'bg-green-50' : 'bg-yellow-50'} p-4`}>
        <div className="flex">
          <CheckCircle2 className={`h-5 w-5 ${result ? 'text-green-400' : 'text-yellow-400'}`} />
          <div className="ml-3">
            <h3 className={`text-sm font-medium ${result ? 'text-green-800' : 'text-yellow-800'}`}>
              Rule evaluation result: {result ? 'True' : 'False'}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default StatusMessage;