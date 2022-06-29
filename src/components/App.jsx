import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Notification from "./Notification";


class App extends React.Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
    };
    
  increaseFeedback = event => {
        const feedback = event.target.dataset.state
        this.setState((prevState) => ({ [feedback]: prevState[feedback] += 1 }))
  }
  calculatetTotal() {
    return Object.values(this.state).reduce((total, value)=> {return total+=value},0)
  }
  calculatetPositivePercentage() {
    const total = this.calculatetTotal()
    if ( total> 0) {
      return Math.round(this.state.good/total*100)
    }
  }
  render() {
    const total= this.calculatetTotal()
        return (
          <div>
            <Section >
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.increaseFeedback} />
              </Section>
               <Section title={"Statistics"}> 
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={this.calculatetPositivePercentage()} />
              {total===0 && <Notification message={"There is no feedback"} />}
              </Section>
          </div>  
        )
        }
}
export {App}
