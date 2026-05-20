export const STATUSES = [
  'Sending',
  'Receiving',
  'Delivered',
  'Draft',
  'Returned',
  'Lost'
] as const;

export type LetterStatus = typeof STATUSES[number];
