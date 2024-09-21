import { FC } from 'react';
import { StateList, StateItem } from './Statistics.styled';

interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export const Statistics: FC<IStatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StateList>
      <StateItem>
        Good: <span>{good}</span>
      </StateItem>
      <StateItem>
        Neutral: <span>{neutral}</span>
      </StateItem>
      <StateItem>
        Bad: <span>{bad}</span>
      </StateItem>
      <StateItem>
        Total: <span>{total}</span>
      </StateItem>
      <StateItem>
        Positive feedback: <span>{positivePercentage}%</span>
      </StateItem>
    </StateList>
  );
};
