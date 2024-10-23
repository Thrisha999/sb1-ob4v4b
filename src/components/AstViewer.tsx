import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Node } from '../types/rule';

interface AstViewerProps {
  ast: Node | null;
}

const AstViewer: React.FC<AstViewerProps> = ({ ast }) => {
  if (!ast) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900">Generated AST</h3>
      <div className="mt-2">
        <SyntaxHighlighter
          language="json"
          style={tomorrow}
          className="rounded-lg"
        >
          {JSON.stringify(ast, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default AstViewer;