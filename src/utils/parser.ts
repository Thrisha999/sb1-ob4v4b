import type { Node } from '../types/rule';

export const tokenize = (ruleString: string): string[] => {
  return ruleString
    .replace(/\(/g, ' ( ')
    .replace(/\)/g, ' ) ')
    .split(' ')
    .filter(token => token.trim() !== '');
};

export const parseRule = (tokens: string[]): Node => {
  const stack: Node[] = [];
  const operators: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        const operator = operators.pop()!;
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push({
          type: 'operator',
          operator: operator as Node['operator'],
          left,
          right,
        });
      }
      operators.pop(); // Remove '('
    } else if (['AND', 'OR'].includes(token)) {
      while (
        operators.length &&
        operators[operators.length - 1] !== '(' &&
        operators[operators.length - 1] !== ')'
      ) {
        const operator = operators.pop()!;
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push({
          type: 'operator',
          operator: operator as Node['operator'],
          left,
          right,
        });
      }
      operators.push(token);
    } else {
      const [field, operator, value] = token.split(/([><=]+)/);
      stack.push({
        type: 'operand',
        field,
        operator: operator as Node['operator'],
        value: isNaN(Number(value)) ? value : Number(value),
      });
    }
  }

  while (operators.length) {
    const operator = operators.pop()!;
    const right = stack.pop()!;
    const left = stack.pop()!;
    stack.push({
      type: 'operator',
      operator: operator as Node['operator'],
      left,
      right,
    });
  }

  return stack[0];
};