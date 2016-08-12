import React, {Component} from 'react';
import Radium from 'radium';
import svars from './style-vars';

@Radium
export default class Work extends Component {
  render() {
    return (
      <div style={styles.center}>
        <div style={styles.leadin}>
          <span style={styles.underline}>Case Studies</span>
        </div>
        <div style={styles.content}>
          With our high-quality UX strategies, visual design and development services, we have successfully launched and improved hundreds of business and products across the globe.
        </div>
        <div style={styles.gallery}>
          <div style={styles.thumb}>
            <div style={styles.thumbImage}>
              <img src=""/>
            </div>
            <div style={styles.thumbText}>
              asdfsadf
            </div>
          </div>
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
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  },
  thumb: {
    borderTop: `3px solid ${svars.primary}`,
    width: '200px',
    height: '300px',
  },
  thumbImage: {

  },
  thumbText: {
    color: 'blue'
  }
};
