import React, {Component} from 'react';
import Radium from 'radium';
import svars from './style-vars';

@Radium
export default class Contact extends Component {
  render() {
    return (
      <div style={styles.center}>
        <div style={styles.leadin}>
          <span style={styles.underline}>Let’s Chat</span>
        </div>
        <div style={styles.content}>
          Over the years we’ve worked on a variety of projects with a wide range of the most widely respected agencies and well-known enterprise and startups. We love to be challenged with unique problems that we can solve through design and development. If have an interesting product or idea you think we could help with? We’d love to chat.
        </div>
      </div>
    );
  }
};

const styles = {
  center: {
    textAlign: 'center'
  },
  leadin: {
    fontFamily: 'Soleil',
    fontSize: '2em',
    marginBottom: '15px'
  },
  underline: {
    borderBottom: `3px solid ${svars.primary}`
  },
  content: {

  }
};
