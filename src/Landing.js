import React, {Component} from 'react';
import Radium from 'radium';
import svars from './style-vars';

@Radium
export default class Landing extends Component {
  render() {
    return (
      <div style={styles.center}>
        <div style={styles.leadin}>
          Creating products that <span style={styles.underline}>delight</span> human beings.
        </div>
        <div style={styles.content}>
          We aim to provide world-class apps, brands products and services.
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
