import React from 'react'
import UserLinks from '../dashboardLinks/userLinks/UserLinks'
import AdminLinks from '../adminLinks/AdminLinks'



export default function DashboardAside(props: any) {
  if (props.user) {
    return <UserLinks/>
  } else if (props.admin) {
      <AdminLinks />
    }
}
