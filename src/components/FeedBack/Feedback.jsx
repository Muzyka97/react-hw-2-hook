// import React from 'react';
import {useState} from 'react';
import styles from './Feedback.module.css';

import FeedBackOptions from './FeedBackOptions';
import Statistic from 'components/Statistic/Statistic';
import Notification from 'components/Notification';
import Section from '../Section';

const options =["good", "neutral", "bad"];

const FeedBack = () =>{
const [state, setState] = useState({good: 0, neutral: 0, bad: 0})

    const handleClickOnGood = (propertyName) =>{
        setState(prevState => {
            return {
                ...prevState, [propertyName]: prevState[propertyName] +1
            }
        })
    }

    const countTotalFeedback = () =>{
    const {good, neutral, bad}= state;
        return good + neutral + bad;
    }

        const countPositiveFeedbackPercentage = () => {
        const goodprst = state.good / total * 100
        return Math.round( goodprst * 100) / 100
    }

        const { good, neutral, bad } = state;
        
        const total = countTotalFeedback()
        const goodprst = countPositiveFeedbackPercentage()

        return(
            <div className={styles.feedBack}>
                <Section title="Please leave feedback">
                    <FeedBackOptions options={options} onLeaveFeedback={handleClickOnGood}/>
                </Section>
                <Section title="Statistic">
                    {total >0 ? <Statistic good={good} neutral={neutral} bad={bad} total={total} goodprst={goodprst} />:<Notification message="No feedback given"/>}
                </Section>
            </div>           
        )
} 

export default FeedBack;