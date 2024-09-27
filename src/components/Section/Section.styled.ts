import styled from 'styled-components';

export const SectionBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  text-shadow: 0 1px 1px #000;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
