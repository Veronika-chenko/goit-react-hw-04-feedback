import { useState, useCallback } from 'react';

export type ScoreType = 'good' | 'neutral' | 'bad';

export const useScore = () => {
  const [score, setScore] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [copiedScore, setCopiedScore] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const setNewScoreValue = useCallback(
    (name: ScoreType) => {
      setScore({
        ...score,
        [name]: (score[name] += 1),
      });
    },
    [score]
  );

  const resetScore = () => {
    setScore({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const setCopy = () => {
    setCopiedScore(score);
  };

  const restoreScore = () => {
    setScore(copiedScore);
  };

  return {
    score,
    copiedScore,
    setNewScoreValue,
    resetScore,
    setCopy,
    restoreScore,
  };
};
