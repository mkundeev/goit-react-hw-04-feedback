import { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Notification from "./Notification";


function App () {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  
  const increaseFeedback = event => {
    const feedback = event.target.dataset.state
    switch (feedback) {
      case 'good':
      setGood(prevState=>prevState+1)   
       return;
      case 'neutral':
      setNeutral(prevState=>prevState+1)   
       return;
      case 'bad':
      setBad(prevState=>prevState+1)   
        return;
    
      default:
        return;
    }
  }
  
  function calculatetPositivePercentage() {
    if ( total> 0) {
      return Math.round(good/total*100)
    }
  }
        return (
          <div>
            <Section >
              <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={increaseFeedback} />
              </Section>
               <Section title={"Statistics"}> 
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={calculatetPositivePercentage()} />
              {total===0 && <Notification message={"There is no feedback"} />}
              </Section>
          </div>  
        )
        
}

export {App}
