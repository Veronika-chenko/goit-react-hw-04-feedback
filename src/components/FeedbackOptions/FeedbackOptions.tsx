import { FC, MouseEvent } from 'react';
import { ButtonWrap, Button } from './FeedbackOptions.styled';

type OnLeaveFeedback = (e: MouseEvent<HTMLElement>) => void

interface IFeedbackOptionsProps {
    options: string[],
    onLeaveFeedback: OnLeaveFeedback,
}

export const FeedbackOptions: FC<IFeedbackOptionsProps> = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonWrap>
            {options.map((option) => (
                <Button
                    key={option}
                    type="button"
                    name={option}
                    onClick={(e: MouseEvent<HTMLElement>) => onLeaveFeedback(e)}>{option}
                </Button>
            )
            )}
        </ButtonWrap>
    )
};
