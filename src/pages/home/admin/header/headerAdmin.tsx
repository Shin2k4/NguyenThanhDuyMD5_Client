import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoIosSearch } from 'react-icons/io'
import { MdSpaceDashboard } from 'react-icons/md'

export default function HeaderAdmin() {
    let titleList = [
        {
            name: "Admin",
            children: [
                {
                    name: "Product"
                },
                {
                    name: "Category"
                }
            ]
        },

    ]
    return (
        <div><header>
            <h2>
                <label htmlFor="nav_toggle">
                    <span>
                        <BiMenu />
                        <MdSpaceDashboard />
                    </span>
                </label>
                {
                    titleList.map((item, index) => {
                        return (
                            <span key={index}>{item.name}</span>
                        )
                    })
                }
            </h2>
            <div className="seach_wrapper">
                <span>
                    <IoIosSearch />
                </span>
                <input type="search" placeholder='search' />
            </div>
            <div className="user_wrapper">
                <img src="" alt="" style={{ width: '30px', height: '30px' }} />
                <div>
                    <h4>{}</h4>
                    <small>Supper admin</small>
                </div>

            </div>
        </header></div>
    )
}
