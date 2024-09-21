import { MouseEvent, useState } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';
import {
  Container,
  LogoContainer,
  RestoreScoreButton,
  ResetButton,
  FlexContainer,
} from './App.styled';

import { ScoreType, useScore } from './hooks/useScore';

import LogoIcon from './img/coffeeCup.png';
import RestoreScoreIcon from './img/refreshIcon.svg';
import NoFeedback from './img/stare.png';

export function App() {
  const [showRestoreButton, setShowRestoreButton] = useState(false);
  const {
    score: { good, neutral, bad },
    setNewScoreValue,
    resetScore,
    setCopy,
    restoreScore,
  } = useScore();

  const feedbackList = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positive = Math.round((good * 100) / total);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const { name } = e.target as HTMLInputElement;
    setNewScoreValue(name as ScoreType);
  };

  const handleResetButtonClick = () => {
    setCopy();
    resetScore();
    setShowRestoreButton(true);
  };

  const handleRestoreButtonClick = () => {
    setShowRestoreButton(false);
    restoreScore();
  };

  return (
    <Container>
      <LogoContainer>
        <img src={LogoIcon} alt="logo" width={50} />
        <p>Coffee Service</p>
      </LogoContainer>

      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackList} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <FlexContainer>
            <Notification message="There is no feedback" />
            <img src={NoFeedback} alt="" width={120} />
          </FlexContainer>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
      {total > 0 && (
        <ResetButton onClick={handleResetButtonClick}>Reset</ResetButton>
      )}
      {showRestoreButton && total <= 0 && (
        <RestoreScoreButton onClick={handleRestoreButtonClick}>
          <img src={RestoreScoreIcon} alt="Refresh score" width={24} />
        </RestoreScoreButton>
      )}
    </Container>
  );
}
