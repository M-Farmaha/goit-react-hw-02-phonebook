import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Extension } from './Extension';
import PropTypes, { string } from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const value = e.currentTarget.textContent;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const all = this.countTotalFeedback();
    if (all === 0) {
      return 0;
    }
    return ((good / all) * 100).toFixed(0);
  };

  render() {
    const {
      state,
      handleClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={handleClick} />
        <Statistics
          options={state}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
        <Extension options={state} />
      </Section>
    );
  }
}

Section.propTypes = {
  title: string,
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

Extension.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};
