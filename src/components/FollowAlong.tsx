import React from 'react'
import FollowImg from './FollowImg'
import './FollowAlong.css'
import FollowDiv from './FollowDiv'

const FollowAlong:React.FC= () => {
  return (
    <div className='follow-along row'>
        <FollowImg fotoProps = "/images/follow/left-img.svg" />
        <FollowDiv/>
        <FollowImg fotoProps = "/images/follow/right-img.svg" />
    </div>
  )
}

export default FollowAlong