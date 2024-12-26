import React from 'react'
import styles from './socialMediaLinks.module.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMedia}>
      <h3>Follow Us On</h3>
      <ul>
        <li>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <TwitterIcon /> Twitter
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
