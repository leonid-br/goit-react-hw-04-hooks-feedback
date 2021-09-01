import { useState } from 'react';

import Section from './Section';
import BtnList from './BtnList';
import StatisticsList from './StatisticsList';
import Notification from './Notification';

const App = () => {
    const [good, setGoodRating] = useState(0);
    const [neutral, setNeutralRating] = useState(0);
    const [bad, setBadRating] = useState(0);

    const clickOnBtn = e => {
        const name = e.target.innerText;
        if (name === 'good') {
            setGoodRating(prevState => prevState + 1);
        }
        if (name === 'bad') {
            setBadRating(prevState => prevState + 1);
        }

        if (name === 'neutral') {
            setNeutralRating(prevState => prevState + 1);
        }
    };

    const countTotalFeedback = () => {
        return good + bad + neutral;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good * 100) / countTotalFeedback());
    };

    const keysArr = ['good', 'bad', 'neutral'];

    return (
        <div>
            <Section title="Please leave feedback">
                {/* Рендер кнопок */}
                <BtnList
                    keysArr={keysArr}
                    clickOnBtn={clickOnBtn}
                />
            </Section>

            {/* Рендер списка */}
            <Section title={'Statistics'}>
                {countTotalFeedback() > 0 ? (
                    <StatisticsList
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        totalReviews={countTotalFeedback()}
                        positive={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification
                        message={'No feedback given'}
                    />
                )}
            </Section>
        </div>
    );
};

export default App;
