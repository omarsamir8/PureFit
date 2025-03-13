import './Footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaViacoin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div id='footer' className="footer">
        <div  className="footer-contact">
          <h2>Contact With Us</h2>
          <div className="contact">
            <input type="text" placeholder="Enter Your Email" />
            <button>Contact Me</button>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>About Us</li>
            <li>Discover</li>
            <li>Explore</li>
            <li>Books</li>
          </ul>
          <ul className='ul2'>
            <li><FaFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaYoutube /></li>
            <li><FaViacoin /></li>
          </ul>
        </div>
        <div className="footer-links2">
          <p style={{ color: "white" }}>@2019 Lift Media. All rights reserved</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}
