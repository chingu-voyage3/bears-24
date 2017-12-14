import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>B2L Project for Chingu Voyage &copy; 2017</p>
      <p>Boilerplate template &copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/" target="_Blank">@contact</a></p>
    </div>
  );
}

export default Footer;
