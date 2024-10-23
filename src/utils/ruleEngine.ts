import { tokenize, parseRule } from './parser';
import { evaluateRule } from './evaluator';
import type { Node } from '../types/rule';

export const createRule = (ruleString: string): Node => {
  const tokens = tokenize(ruleString);
  return parseRule(tokens);
};

export const combineRules = (rules: Node[]): Node => {
  if (rules.length === 0) return null!;
  if (rules.length === 1) return rules[0];

  return rules.reduce((combined, rule) => ({
    type: 'operator',
    operator: 'AND',
    left: combined,
    right: rule,
  }));
};

export { evaluateRule };