export interface EventData {
  title: string;
  ticket_price: number;
  token_price?: number;
  close?: boolean;
  collaborators?: number;
  collaborations?: number;
  ticketsSold?: number;
}

export const dataTest: EventData[] = [
  {
    title: 'Mi primer evento en Solana',
    ticket_price: 0.01,
    token_price: 0.1,
    collaborators: 2,
    collaborations: 1,
    ticketsSold: 10,
    close: true,
  },
  {
    title: '#HeavyDutyCamp v3',
    ticket_price: 0.05,
    token_price: 0.12,
    collaborators: 3,
    collaborations: 1,
    ticketsSold: 8,
    close: false,
  },
  {
    title: 'Solana Breakpoint 2025',
    ticket_price: 0.05,
    token_price: 0.1,
    collaborators: 4,
    collaborations: 1,
    ticketsSold: 4,
    close: true,
  },
];
