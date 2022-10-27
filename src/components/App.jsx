import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const feedbackList = ['good', 'neutral', 'bad'];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = Math.round((good * 100) / total);

  const handleClick = evt => {
    handleIncrement(evt, 'good', setGood);
    handleIncrement(evt, 'neutral', setNeutral);
    handleIncrement(evt, 'bad', setBad);
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

function handleIncrement(evt, state, setState) {
  if (evt.target.name === state) {
    setState(state => state + 1);
  }
  return;
}
