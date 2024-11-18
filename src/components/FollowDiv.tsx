import React from 'react'
import './FollowDiv.css'

const FollowDiv:React.FC = () => {
  return (
    <div className='follow-div col-12 col-md-4 p-5'>
        <h6>#DirtyDishes</h6>
        <h3 className='text-center py-3'>A full sink is a sign of a great night. You wash, we'll dry.</h3>
        <button>Follow Along</button>
    </div>
  )
}

export default FollowDiv