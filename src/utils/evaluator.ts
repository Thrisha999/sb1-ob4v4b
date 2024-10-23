import type { Node, RuleData } from '../types/rule';

export const evaluateRule = (node: Node, data: RuleData): boolean => {
  if (node.type === 'operand') {
    const value = data[node.field as keyof RuleData];
    switch (node.operator) {
      case '>':
        return value > (node.value as number);
      case '<':
        return value < (node.value as number);
      case '=':
        return value === node.value;
      case '>=':
        return value >= (node.value as number);
      case '<=':
        return value <= (node.value as number);
      default:
        return false;
    }
  }

  if (node.operator === 'AND') {
    return evaluateRule(node.left!, data) && evaluateRule(node.right!, data);
  }
  if (node.operator === 'OR') {
    return evaluateRule(node.left!, data) || evaluateRule(node.right!, data);
  }

  return false;
};