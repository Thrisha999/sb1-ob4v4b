export interface Node {
  type: 'operator' | 'operand';
  operator?: 'AND' | 'OR' | '>' | '<' | '=' | '>=' | '<=';
  left?: Node;
  right?: Node;
  field?: string;
  value?: string | number;
}

export interface RuleData {
  age: number;
  department: string;
  salary: number;
  experience: number;
}

export interface Rule {
  id: string;
  name: string;
  description: string;
  ruleString: string;
  ast: Node;
}