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
    positivePercentage
}) => {
    return (
        <StateList>
            <StateItem>Good: {good}</StateItem>
            <StateItem>Neutral: {neutral}</StateItem>
            <StateItem>Bad: {bad}</StateItem>
            <StateItem>Total: {total}</StateItem>
            <StateItem>Positive feedback: {positivePercentage}%</StateItem>
        </StateList>
    )
};
