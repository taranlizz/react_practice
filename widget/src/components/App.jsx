import { Component } from "react";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Controls } from "./Controls";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((state) => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, val) => {
      total += val;
      return total;
    }, 0);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <Controls options={options} onClick={this.onLeaveFeedback} />
          {total ? (
            <>
              <Statistics stats={this.state} total={total} />
            </>
          ) : (
            <Notification message="There is no feedback" />
          )}
          <GlobalStyle />
        </Section>
      </Layout>
    );
  }
}
