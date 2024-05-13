import React from 'react'

export default function Menu() {
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebar_brand'>
                    <a href="/"><h2><span id='logo'> ShinShop</span></h2></a>
                </div>
                <div className='sidebar_menu'>
                    <ul>
                        <li>
                            <a href="/admin/product" className='active'>
                                <span>
                                </span>
                                <span>
                                    Product
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/admin/category">
                                <span>
                                    {/* icon */}
                                </span>
                                <span>
                                    Category
                                </span>
                            </a>
                        </li>
                    </ul>
                    
                </div>

            </div>
        </div>
    )
}
