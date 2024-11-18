import React from 'react'

interface CompaniesProps{
  companiesImg: string
}
const company:React.FC<CompaniesProps>= (props) => {
  console.log(props)
  return (
    <img src={props.companiesImg} alt='' className='company-img img-fluid'/>
  )
}

export default company