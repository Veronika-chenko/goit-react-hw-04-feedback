import { MouseEvent, useState } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackList = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positive = Math.round((good * 100) / total);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const { name } = e.target as HTMLInputElement;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackList} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
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
    </>
  );
}
