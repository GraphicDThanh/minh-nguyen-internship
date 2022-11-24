import React, { ReactDOM } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is
          {' '}
          {this.state.date.toLocaleTimeString()}
          .
        </h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <h1>Hello</h1>;
root.render(element);
