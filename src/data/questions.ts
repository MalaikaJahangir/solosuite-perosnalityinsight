export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  direction: 'positive' | 'negative';
}

export const questions: Question[] = [
  {
    id: 1,
    text: "I gain energy from being around other people and engaging in social activities.",
    dimension: 'EI',
    direction: 'positive'
  },
  {
    id: 2,
    text: "I prefer to focus on the present moment and concrete, tangible information rather than abstract possibilities.",
    dimension: 'SN',
    direction: 'positive'
  },
  {
    id: 3,
    text: "When making decisions, I prioritize logical analysis and objective criteria over personal values.",
    dimension: 'TF',
    direction: 'positive'
  },
  {
    id: 4,
    text: "I like to have things decided and settled rather than keeping my options open.",
    dimension: 'JP',
    direction: 'positive'
  },
  {
    id: 5,
    text: "I often need quiet time alone to recharge and process my thoughts.",
    dimension: 'EI',
    direction: 'negative'
  },
  {
    id: 6,
    text: "I'm drawn to innovative ideas and future possibilities rather than established methods.",
    dimension: 'SN',
    direction: 'negative'
  },
  {
    id: 7,
    text: "I consider how decisions will affect people's feelings and well-being before making choices.",
    dimension: 'TF',
    direction: 'negative'
  },
  {
    id: 8,
    text: "I prefer to stay flexible and adapt to situations as they arise rather than following strict plans.",
    dimension: 'JP',
    direction: 'negative'
  },
  {
    id: 9,
    text: "I feel comfortable being the center of attention in group settings.",
    dimension: 'EI',
    direction: 'positive'
  },
  {
    id: 10,
    text: "I trust information that comes from direct experience and proven methods more than theoretical concepts.",
    dimension: 'SN',
    direction: 'positive'
  },
  {
    id: 11,
    text: "I make decisions based on what makes the most logical sense, even if it might upset others.",
    dimension: 'TF',
    direction: 'positive'
  },
  {
    id: 12,
    text: "I work best when I have clear deadlines and structured timelines to follow.",
    dimension: 'JP',
    direction: 'positive'
  }
];