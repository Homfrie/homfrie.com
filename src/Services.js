import React, {Component} from 'react';
import Radium from 'radium';
import svars from './style-vars';
import animator from './animator';

@Radium
export default class Services extends Component {
  render() {
    return (
      <div style={styles.center}>
        <div style={styles.leadin}>
          <span style={styles.underline}>Services</span>
        </div>
        <div style={styles.content}>
        We build identities and experiences to elevate and empower our partners to move forward through
        </div>
        <div style={styles.gallery}>
          <div style={styles.thumb}>
            <div style={styles.thumbImage}>
              <img alt="Homfrie does branding" src="/static/img/services/branding.svg"/>
            </div>
            <div style={styles.thumbText}>
              Branding & Design
            </div>
          </div>

          <div style={styles.thumb}>
            <div style={styles.thumbImage}>
              <img alt="Homfrie does product design" src="/static/img/services/design.svg"/>
            </div>
            <div style={styles.thumbText}>
              Product Design
            </div>
          </div>

          <div style={styles.thumb}>
            <div style={styles.thumbImage}>
              <img alt="Homfrie does product development" src="/static/img/services/development.svg"/>
            </div>
            <div style={styles.thumbText}>
              Product Development
            </div>
          </div>

          <div style={styles.thumb}>
            <div style={styles.thumbImage}>
              <img alt="Homfrie does product strategy" src="/static/img/services/strategy.svg"/>
            </div>
            <div style={styles.thumbText}>
              Product Strategy
            </div>
          </div>

        </div>
      </div>
    );
  }
};

const styles = {
  center: {
    textAlign: 'center',
    width: '100%'
  },
  leadin: {
    fontFamily: 'Soleil',
    fontSize: '3.2em',
    marginBottom: '37px'
  },
  underline: {
    //animation: svars.colorJourneyAnimation('border-color'),
    borderBottom: `3px solid ${svars.primary}`,
    //animationName: animator.colorJourneyBorder,
  },
  content: {
    maxWidth: '538px',
    fontSize: '1.5em',
    margin: 'auto',
    [`@media (max-width: ${svars.bpSmall})`]: {
      maxWidth: '350px',
      fontSize: '1.2em'
    }
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    flexWrap: 'wrap'
  },
  thumb: {
    borderTop: `3px solid ${svars.primary}`,
    height: '270px',
    background: '#fff',
    textAlign: 'center',
    paddingTop: '42px',
    margin: '0px 10px 20px',
    minWidth: '270px',
    width: '270px',
    [`@media (max-width: ${svars.bpSmall})`]: {
      width: '170px',
      minWidth: '170px',
      height: '190px',
      fontSize: '0.7em'
    },
    [`@media (max-width: ${svars.bpMedium})`]: {
      width: '200px',
      minWidth: '200px'
    }

  },
  thumbImage: {
    width: '116px',
    minHeight: '102px',
    margin: 'auto'
  },
  thumbText: {
    color: '#000',
    fontFamily: 'Soleil',
    fontSize: '1.7em',
    margin: '20px auto 0',
    width: '125px'
  }
};
