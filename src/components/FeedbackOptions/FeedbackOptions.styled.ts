import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  padding: 14px 4px;
  width: 118px;
  @media screen and (min-width: 406px) {
    width: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    padding: 8px 4px;
  }

  font-size: 18px;
  text-transform: capitalize;
  color: var(--button-text);
  background-color: var(--accent);

  border-radius: 4px;
  border: none;
  box-shadow: 2px 6px 6px var(--brown-1);
  text-shadow: 0 2px 3px #000;

  transition: background-color 250ms linear;
  &:hover {
    background-color: var(--brown-1);
    box-shadow: 0 2px 2px 1px var(--accent);
    text-shadow: 0 2px 3px var(--accent);
  }
`;
