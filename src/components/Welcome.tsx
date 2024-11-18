import React from 'react'
import "./Welcome.css"

const Welcome: React.FC = () => {
    return (
        <div className='welcome p-4 p-md-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center" data-aos="fade-up">
                        <h2 className='welcome-h2 py-3'>Welcome to Our Place</h2>
                    </div>
                    <div className="col-12 col-md-6" data-aos="fade-down">
                        <article className='welcome-text'>At Our Place, we believe in the power of home-cooking to bring people together. Our collections are new heirlooms from the cultures and places that make up the fabric of the modern multi-ethnic kitchen. We design thoughtfully, source ethically, and produce sustainably because what we make is connected to one another and the earth we share.</article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome