export const themes = ['dark', 'light'] as const;
export type Theme = (typeof themes)[number];

export type Node = {
  label: string;
  id: string;
  username?: string;
  email?: string;
  password?: string;
  pin?: string;
  notes?: string;
  phone?: string;
  invalid?: boolean;
};
