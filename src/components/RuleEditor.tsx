import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { createRule, evaluateRule } from '../utils/ruleEngine';
import type { Node, RuleData } from '../types/rule';
import RuleInput from './RuleInput';
import DataInput from './DataInput';
import ActionButtons from './ActionButtons';
import StatusMessage from './StatusMessage';
import AstViewer from './AstViewer';

const RuleEditor: React.FC = () => {
  const [ruleString, setRuleString] = useState<string>(
    "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"
  );
  const [testData, setTestData] = useState<RuleData>({
    age: 35,
    department: 'Sales',
    salary: 60000,
    experience: 3,
  });
  const [ast, setAst] = useState<Node | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleCreateRule = () => {
    try {
      const newAst = createRule(ruleString);
      setAst(newAst);
      setError('');
    } catch (err) {
      setError('Invalid rule syntax');
      setAst(null);
    }
  };

  const handleEvaluate = () => {
    if (!ast) {
      setError('Please create a rule first');
      return;
    }

    try {
      const evaluationResult = evaluateRule(ast, testData);
      setResult(evaluationResult);
      setError('');
    } catch (err) {
      setError('Error evaluating rule');
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              Rule Engine AST
            </h1>
            
            <div className="mt-8 space-y-6">
              <RuleInput ruleString={ruleString} onChange={setRuleString} />
              <DataInput testData={testData} onChange={setTestData} onError={setError} />
              <ActionButtons onCreateRule={handleCreateRule} onEvaluate={handleEvaluate} />
              <StatusMessage error={error} result={result} />
              <AstViewer ast={ast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleEditor;