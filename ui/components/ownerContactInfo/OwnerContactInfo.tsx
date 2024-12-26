import React from 'react'
import styles from './ownerContactInfo.module.scss';

const OwnerContactInfo = () => {
  return (
    <div className={styles.ownerInfo}>
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> 123 Main Street, Hometown, USA</p>
      <p><strong>Email:</strong> <a href="mailto:owner@example.com">techLinage@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+2347064778666">+2347064778666</a></p>
      <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
    </div>
  );
};

export default OwnerContactInfo;
