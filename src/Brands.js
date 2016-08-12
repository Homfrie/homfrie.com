import React, {Component} from 'react';
import Radium from 'radium';
import svars from './style-vars';

@Radium
export default class Brands extends Component {
  render() {
    return (
      <div style={styles.center}>
        <div style={styles.leadin}>
          <span style={styles.underline}>Trustworthy</span>
        </div>
        <div style={styles.content}>
        We have designed and developed products for corporations, brands, and startups who trust us and here are just a few of them:
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
