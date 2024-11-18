import React from 'react'
import './ProductCard.css'

interface mehsullarProps{
    fotoProps:string;
    nameProps:string;
    setOfProps:string;
    priceProps:string;
    deckProps:string;
    classAdi:string
}

const ProductCard:React.FC <mehsullarProps> = ({fotoProps, nameProps, deckProps, setOfProps, priceProps, classAdi}) => {
  return (
    <div className='product-card p-2'>
        <div className="bg-bej mx-auto">
            <img src={fotoProps} alt="" className={classAdi}/>
        </div>
        <h4 className='text-center'>{nameProps}</h4>
        <p className='text-center'><span id='set'>{setOfProps}</span> - <span id='price'>{priceProps}</span></p>
        <p className="deck">{deckProps}</p>
    </div>
  )
}

export default ProductCard