const appearance = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  destructive: 'destructive',
} as const;

type Appearance = (typeof appearance)[keyof typeof appearance];

export { appearance };
export type { Appearance };
