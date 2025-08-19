export type Pattern = {
  name: string;
  path: string;
};

export type PatternGroup = {
  title: string;
  key: 'creational' | 'structural' | 'behavioral';
  items: Pattern[];
};

export const PATTERN_GROUPS: PatternGroup[] = [
  {
    title: 'Порождающие',
    key: 'creational',
    items: [
      { name: 'Singleton', path: '/patterns/singleton' },
      { name: 'Factory', path: '/patterns/factory' },
      { name: 'Abstract Factory', path: '/patterns/abstract-factory' },
      { name: 'Builder', path: '/patterns/builder' },
      { name: 'Prototype', path: '/patterns/prototype' },
    ],
  },
  {
    title: 'Структурные',
    key: 'structural',
    items: [
      { name: 'Adapter', path: '/patterns/adapter' },
      { name: 'Bridge', path: '/patterns/bridge' },
      { name: 'Composite', path: '/patterns/composite' },
      { name: 'Decorator', path: '/patterns/decorator' },
      { name: 'Facade', path: '/patterns/facade' },
      { name: 'Flyweight', path: '/patterns/flyweight' },
      { name: 'Proxy', path: '/patterns/proxy' },
    ],
  },
  {
    title: 'Поведенческие',
    key: 'behavioral',
    items: [
      { name: 'Observer', path: '/patterns/observer' },
      { name: 'Strategy', path: '/patterns/strategy' },
      { name: 'State', path: '/patterns/state' },
      { name: 'Command', path: '/patterns/command' },
      { name: 'Iterator', path: '/patterns/iterator' },
      { name: 'Mediator', path: '/patterns/mediator' },
      { name: 'Memento', path: '/patterns/memento' },
      { name: 'Template Method', path: '/patterns/template-method' },
      { name: 'Visitor', path: '/patterns/visitor' },
      { name: 'Chain of Responsibility', path: '/patterns/chain-of-responsibility' },
      { name: 'Interpreter', path: '/patterns/interpreter' },
    ],
  },
];
