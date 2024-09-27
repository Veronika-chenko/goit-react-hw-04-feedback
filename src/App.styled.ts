import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;

  margin: 0 auto;
  padding: 20px;
  padding-top: 120px;

  background-position: right bottom, left top;
  background-repeat: no-repeat;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;

  display: flex;
  align-items: flex-end;
  gap: 4px;
  img {
    transition: transform 250ms linear;
  }

  transition: transform 250ms linear;

  p {
    width: 38px;
    font-size: 12px;
    font-weight: 700;
    text-shadow: 0 1px 1px #000;
    letter-spacing: 0.1em;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ContentImageWrap = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0;
`;

export const ResetButton = styled.button`
  margin-top: 40px;
  padding: 8px 16px;

  font-size: 14px;
  color: var(--button-text);
  background-color: var(--accent);

  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 2px var(--brown-1);
  text-shadow: 0 2px 3px #000;

  transition: background-color 250ms linear;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    background-color: var(--brown-1);
    box-shadow: 0 2px 2px var(--accent);
    text-shadow: 0 2px 3px var(--accent);
  }
`;

export const RestoreScoreButton = styled.button`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  img {
    transform: scale(-1, 1);
    transition: transform 250ms linear;
  }

  &:hover {
    img {
      transform: scale(-1, 1) rotate(50deg);
    }
  }
`;
