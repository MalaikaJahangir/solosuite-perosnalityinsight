import { questions } from '../data/questions';

export const calculateMBTI = (answers: number[]): string => {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0, 
    T: 0, F: 0,
    J: 0, P: 0
  };

  questions.forEach((question, index) => {
    const answer = answers[index];
    if (answer === 0) return; // Skip unanswered questions

    const { dimension, direction } = question;
    const score = direction === 'positive' ? answer : 6 - answer;

    switch (dimension) {
      case 'EI':
        if (direction === 'positive') {
          scores.E += score;
          scores.I += 6 - score;
        } else {
          scores.I += score;
          scores.E += 6 - score;
        }
        break;
      case 'SN':
        if (direction === 'positive') {
          scores.S += score;
          scores.N += 6 - score;
        } else {
          scores.N += score;
          scores.S += 6 - score;
        }
        break;
      case 'TF':
        if (direction === 'positive') {
          scores.T += score;
          scores.F += 6 - score;
        } else {
          scores.F += score;
          scores.T += 6 - score;
        }
        break;
      case 'JP':
        if (direction === 'positive') {
          scores.J += score;
          scores.P += 6 - score;
        } else {
          scores.P += score;
          scores.J += 6 - score;
        }
        break;
    }
  });

  const type = 
    (scores.E > scores.I ? 'E' : 'I') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');

  return type;
};