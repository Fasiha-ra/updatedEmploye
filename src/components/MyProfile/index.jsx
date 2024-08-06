import React from 'react'
import Header from '../Header'
import UpdateProfile from './UpdateProfile'
import Footer from '../Footer'
import { MyProfileWrap } from './myProfile.styles'

const MyProfile = () => {
  return (
   <MyProfileWrap>
    <Header />
    <div className="wrapper">
    <div className="profileHolder">
    <UpdateProfile />
    </div>
    <Footer/>
    </div>
   </MyProfileWrap>
  )
}

export default MyProfile