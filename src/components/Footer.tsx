import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <div className='footer pt-3'>
      <div className="footer-place py-5">
        <div className="footer-start container">
          <div className="row">
            <div className="footer-keep col-12 col-md-6">
              <h5>Keep in touch</h5>
              <p className='py-3'>Be the first to know about new collections, special events, and what’s going on at Our Place.</p>
            </div>
            <div className="footer-shop col-12 col-md-2">
              <h6>SHOP</h6>
              <p>Main Plates</p>
              <p>Side Bowls</p>
              <p>Drinking Glasses</p>
              <p>Family Dinner Bundle</p>
            </div>
            <div className="footer-company col-12 col-md-2">
              <h6>COMPANY</h6>
              <p>Mission</p>
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Returns</p>
              <p>Bulk Orders</p>
              <p>Careers</p>
            </div>
            <div className="footer-social col-12 col-md-2">
              <h6>SOCIAL</h6>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>

          </div>
        </div>
      </div>



      <div className="footer-end pt-3">
        <div className="footer2021 container">
          <div className="row">
            <div className="end-left col-12 col-md-6">
              <p>© Our Place 2021</p>
            </div>
            <div className="end-right col-12 col-md-6 d-flex justify-content-between">
              <p>Copyright 2021</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Returns</p>
              <img src="./public/images/footer.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer