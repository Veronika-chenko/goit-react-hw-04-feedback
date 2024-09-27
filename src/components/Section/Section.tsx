import { FC, PropsWithChildren } from 'react';
import { SectionBox, Title } from './Section.styled';

export const Section: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};
