import React from 'react'
import FollowAlong from '../components/FollowAlong'
import Curated from '../components/Curated'
import Welcome from '../components/Welcome'
import Companies from '../components/Companies'
import Introduction from '../components/Introduction'
import ContactForm from '../components/ContactForm'

const Home:React.FC = () => {
  return (
    <>

    <Introduction/>
    <Companies/>
    <Welcome/>
    <Curated/>
    <FollowAlong/>
    <ContactForm/>
    </>
  )
}

export default Home