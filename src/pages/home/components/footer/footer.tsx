import React from 'react'
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import './footer.scss'
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { SiGmail } from 'react-icons/si';
export default function footer() {
  return (
    <footer >
      <div className='container row'>
        <div className='footer-col '>
          <h4>Hostine</h4>
          <h6> <FaPhoneAlt /> <a href="">0373850389</a></h6>
          <h4>Email</h4>
          <h6> <FaPhoneAlt /> <a href="">0373850389</a></h6>
          <h6>Chính sách bán hàng</h6>
          <h6>Hướng dẫn mua hàng</h6>
        </div>
        
        <div className='footer-col'>
          <h4>TP. HỒ CHÍ MINH (9h30 - 22h)</h4>
          <ul>
            <li><a href="">92 Hồ Tùng Mậu, P.Bến Nghé, Q1</a></li>
            <li><a href="">459E Nguyễn Đình Chiểu, P.5, Q.3 (ngã tư Cao Thắng)</a></li>
            <li><a href="">708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)</a></li>
            <li><a href="">87 Bàu Cát, P.14, Q.Tân Bình (khúc giao Nguyễn Hồng Đào)</a></li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>HÀ NỘI (9h - 22h)</h4>
          <ul>
            <li><a href="">81 Bà Triệu, Hai Bà Trưng</a></li>
            <li><a href="">241 Chùa Bộc, Đống Đa</a></li>
            <li><a href="">60 Trần Đại Nghĩa, Hai Bà Trưng</a></li>
            <li><a href="">226 Nguyễn Trãi, Nam Từ Liêm (gần ĐH Hà Nội)</a></li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>Mạng xã hội</h4>
          <ul className='social-links'>
            <h6>Hãy kết nối với chúng mình</h6>
            <a href=""><FaFacebookF /></a>
            <a href=""><CiLinkedin /></a>
            <a href=""><CiTwitter /></a>
            <a href=""><SiGmail /></a>
          </ul>
        </div>
      </div>
    </footer>
  )
}