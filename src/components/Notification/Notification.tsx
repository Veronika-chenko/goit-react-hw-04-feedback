import { FC } from 'react';
import { NotifText } from './Notification.styled';

export const Notification: FC<{ message: string }> = ({ message }) => {
    return (
        <NotifText>{message}</NotifText>
    )
}
