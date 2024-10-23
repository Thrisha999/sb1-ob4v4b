# Rule Engine with AST

A powerful and flexible rule engine that uses Abstract Syntax Trees (AST) to evaluate complex business rules. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🌳 AST-based rule parsing and evaluation
- 🔍 Visual AST representation
- ⚡ Real-time rule evaluation
- 🎯 Support for complex logical operations (AND, OR)
- 📊 JSON-based test data input
- 🚀 Built with React + TypeScript
- 🎨 Beautiful UI with Tailwind CSS

## Rule Syntax

The rule engine supports the following operations:

- Comparison operators: `>`, `<`, `=`, `>=`, `<=`
- Logical operators: `AND`, `OR`
- Parentheses for grouping: `(`, `)`

Example rule:
```
((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)
```

## Data Structure

The rule engine evaluates rules against data objects with the following structure:

```typescript
interface RuleData {
  age: number;
  department: string;
  salary: number;
  experience: number;
}
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter your rule in the Rule String textarea using the supported syntax
2. Click "Create AST" to generate the Abstract Syntax Tree
3. Modify the test data JSON if needed
4. Click "Evaluate Rule" to see the result

## Project Structure

```
src/
├── components/           # React components
│   ├── ActionButtons.tsx
│   ├── AstViewer.tsx
│   ├── DataInput.tsx
│   ├── RuleEditor.tsx
│   ├── RuleInput.tsx
│   └── StatusMessage.tsx
├── types/               # TypeScript type definitions
│   └── rule.ts
├── utils/               # Utility functions
│   ├── evaluator.ts     # Rule evaluation logic
│   ├── parser.ts        # Rule parsing logic
│   └── ruleEngine.ts    # Main engine interface
└── App.tsx              # Root component
```

## Technical Details

### AST Node Structure

```typescript
interface Node {
  type: 'operator' | 'operand';
  operator?: 'AND' | 'OR' | '>' | '<' | '=' | '>=' | '<=';
  left?: Node;
  right?: Node;
  field?: string;
  value?: string | number;
}
```

### Rule Evaluation Process

1. The rule string is tokenized into individual components
2. Tokens are parsed into an Abstract Syntax Tree
3. The AST is traversed recursively to evaluate the rule against the provided data
4. The final boolean result is returned

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT