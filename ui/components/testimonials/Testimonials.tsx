import React from 'react'
import UserCardSlider from '../userCardSlider/UserCardSlider'
import styles from './testimonials.module.scss'
import SiteInfo from '../siteInfo/SiteInfo'

export default function Testimonials() {
  const users = [
    {
      id: 1,
        name: 'Chukwuemeka Michael',
      comments: `i'm Chukwuemeka, ${SiteInfo.name} has simplified my coding problems `,
      profilePicture: '/images/image04.jpeg',
    },

    {
      id: 2,
      name: 'Nonso Okafor',
      comments: `i'm Nonso, ${SiteInfo.name} courses are the best `,
      profilePicture: '/images/image04.jpeg',
    },
    {
      id: 3,
      name: 'Ngozi Nweke',
      comments: `i'm Ngozi, i have a gotten a job within some months i enrolled on ${SiteInfo.name} courses `,
      profilePicture: '/images/image04.jpeg',
    },
    {
      id: 4,
      name: 'Jane Smith',
      comments: `i'm Jane, ${SiteInfo.name} is the best learning plateform i have seen so far `,
      profilePicture: '/images/image03.jpeg',
    },
    {
      id: 5,
      name: 'Mike Johnson',
      comments: `i'm Mike i love ${SiteInfo.name} detailed larning pathern `,
      profilePicture: '/images/image02.jpeg',
    },
    // Add more users as needed
  ]
  return (
    <div className={styles.container}>
      <UserCardSlider users={users} />
    </div>
  )
}
