'use client'
import ContactForm from '@/ui/components/contactForm/ContactForm';
import OwnerContactInfo from '@/ui/components/ownerContactInfo/OwnerContactInfo';
import styles from './contact.module.scss';
import SocialMediaLinks from '@/ui/components/socialMediaLinks/SocialMediaLinks';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Get in Touch</h1>
      <div className={styles.contactWrapper}>
        <OwnerContactInfo />
          <SocialMediaLinks />
        <h2>Send Us a Message</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactsPage;
// "use client"
// import React from 'react'
// import styles from '../../styles/components/contacts.module.scss';
// import CEOAvatar from '../../components/CEOAvatar';
//
// export default function Contacts() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <CEOAvatar />
//       </div>
//     </div>
//   )
// }
