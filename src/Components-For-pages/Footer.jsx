import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

import { BsLinkedin,BsFacebook,BsInstagram} from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className=' overflow-hidden'><div  className='flexfooter  text-gray-100'>
<div ><Link to="/" className='logo '><img src={logo} alt="" />
</Link>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure deserunt vitae provident voluptate ratione vero optio maiores fuga illo? Dolorem vero neque expedita cum, quasi fuga dignissimos quisquam distinctio.</p>
<ul className='flex'>
    <li><a href="https://www.facebook.com/profile.php?id=100034682511568"><BsFacebook/></a></li>
    <li><a href="https://www.linkedin.com/in/ahmed-anwar-04173725b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BB3hGBzauRSK31T6TC8cwpg%3D%3D"><BsLinkedin/></a></li>
    <li><a href="https://www.bing.com/search?pglt=673&q=instagram&cvid=860b66890c4a42b5b565c33724cea338&aqs=edge.1.69i57j46j0l7.4101j0j1&FORM=ANNTA1&PC=U531"><BsInstagram/></a></li>
</ul>
</div>
<ul>
    <h1 className='text-2xl'>Premalinks</h1>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/trainers">Trainers</Link></li>
    <li><Link to="/plans">plans</Link></li>
    <li><Link to="/contact">contact</Link></li>

</ul>
<ul>
<li>    <h1 className='text-2xl'>Insights</h1>
</li>    <li><Link to="/s">Blog</Link></li>
    <li><Link to="/s">Case Studies</Link></li>
    <li><Link to="/s">Events</Link></li>
    <li><Link to="/s">Comunities</Link></li>
    <li><Link to="/s">FAQs</Link></li>

</ul><ul>
    <h1 className='text-2xl'>Premalinks</h1>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/s">Support</Link></li>


</ul></div>
<div className="footer__copyright">
    <small>2022 EGATIO TUTORIALS &copy; All Rights Reserved</small>
</div>
    </footer>

  )
}
