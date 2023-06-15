import { leadershipQuiz } from 'model/LeadershipQuiz';
import { roleQuiz } from 'model/RoleQuiz';

export const getQuizData = step => {
  switch (step) {
    case 1:
      return leadershipQuiz;
    default:
      return roleQuiz;
  }
};

export const getMappedVote = value => {
  switch (value) {
    case 0:
      return { y: 5, code: 'Assist' };
    case 1:
      return { y: 10, code: 'Do' };
    case 2:
      return { y: 15, code: 'Guide' };
    default:
      return { y: 20, code: 'Lead' };
  }
};

export const getSliderVote = value => {
  switch (value) {
    case 5:
      return 0;
    case 10:
      return 1;
    case 15:
      return 2;
    default:
      return 3;
  }
};
