import React, {Component} from 'react';
import {Link} from 'react-router';
import Radium, {StyleRoot} from 'radium';
import svars from './style-vars';

@Radium
export default class Layout extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.base}>
          <div style={styles.border}>
            <div style={styles.logo}>
              <img src="/static/img/logo.svg" alt="Homfrie Logo"/>
            </div>
            <div style={styles.center}>
              {this.props.children}
            </div>
            <div style={styles.navigationContainer}>
              <Link style={styles.navigation} to="/">About</Link>
              <Link style={styles.navigation} to="/services">Services</Link>
              <Link style={styles.navigation} to="/work">Work</Link>
              <Link style={styles.navigation} to="/contact">Contact</Link>
            </div>
            <div style={styles.socialContainer}>
              <a style={styles.social} href=""><img src="/static/img/social-networks/facebook.svg"/></a>
              <a style={styles.social} href=""><img src="/static/img/social-networks/twitter.svg"/></a>
              <a style={styles.social} href=""><img src="/static/img/social-networks/instagram.svg"/></a>
              <a style={styles.social} href=""><img src="/static/img/social-networks/linkedin.svg"/></a>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
};

const styles = {
  base: {
    background: svars.background,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Gotham Narrow'
  },
  border: {
    border: `5px solid ${svars.primary}`,
    width: '100vw',
    overflow: 'auto'
  },
  socialContainer: {
    bottom: '5%',
    left: '5%',
    position: 'fixed',
    width: '100px'
  },
  social: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    marginRight: '5px'
  },
  logo: {
    position: 'fixed',
    left: '5%',
    top: '5%',
    width: '100px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '165px'
  },
  navigationContainer: {
    width: '150px',
    top: '5%',
    right: '5%',
    position: 'fixed',
    textAlign: 'right'
  },
  navigation: {
    color: svars.primary,
    fontSize: '1.2em',
    textDecoration: 'none',
    fontWeight: 500,
    display: 'block'
  }
};
