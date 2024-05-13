import React from 'react'
import './header.scss'
import { MdOutlineAccountCircle } from 'react-icons/md'

export default function Header() {

  return (
    <div id='header'>
      <header>
        <div className='inner_header container'>
          <a href="/" id='logo'>
            Shin Shop
          </a>
          <nav id='main_menu'>
            <ul className='menu'>
              <li><a href="/">Trang Chủ</a></li>
              <li><a href="/about">Giới Thiệu</a></li>
              <li><a href="/product">Sản Phẩm</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Liên Hệ</a></li>
              <li><a href=""></a><MdOutlineAccountCircle className='icon'/>
                <ul className="sub_menu">
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/admin">Admin</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li>{
                    localStorage.getItem('token') ? <>
                      <div><a href="" onClick={() => {
                        localStorage.removeItem('token')
                      }}>Đăng xuất</a></div>
                    </> : <>
                      <div><a href="/login" >Đăng Nhập</a></div>
                    </>
                  }</li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div id='banner'>

      </div>


    </div>
  )
}
