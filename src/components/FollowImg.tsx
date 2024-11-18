import React from 'react'

interface FollowImgProps {
  fotoProps: string
}
const FollowImg: React.FC<FollowImgProps> = (props) => {
  return (
    <div className="col-12 col-md-4">
      <img src={props.fotoProps} alt="" className='img-fluid' />
    </div>
  )
}

export default FollowImg