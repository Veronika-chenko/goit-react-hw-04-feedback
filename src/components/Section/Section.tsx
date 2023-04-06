import { FC, PropsWithChildren } from 'react';
import { Title } from './Section.styled';

export const Section: FC<PropsWithChildren<{title: string}>> = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    )
}
