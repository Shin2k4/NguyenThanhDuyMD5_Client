import apis from '@/apis';
import { StoreType } from '@/stores';
import { cartAction } from '@/stores/slices/cart.slice';
import { message } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppCarousel from '../components/carousel/Carousel';
import Button from 'react-bootstrap/esm/Button';

export default function HomeContent() {
  const productStore = useSelector((store: StoreType) => store.productStore);
  const userStore = useSelector((store: StoreType) => store.userStore);
  const cartStore = useSelector((store: StoreType) => store.cartStore);
  const dispatch = useDispatch();
  const handleCreateCart = async (dataCreate: {
    productId: number,
    quantity: number,
    userId: number,
    total: number
  }) => {
    try {
      let resCreateCart = await apis.cart.create(dataCreate);

      if (resCreateCart.status != 200) {
        throw {
          message: "Lỗi khi thêm vào giỏ hàng"
        }
      }
      dispatch(cartAction.create(resCreateCart.config.data))
      message.success("Thêm vào giỏ hàng thành công")

    } catch (err) {
      message.error("Mua chậm thôi")
    }
  }

  return (
    <div id='wapper'>
      <div className='headline'>
        <h3>Sản phẩm mới</h3>
      </div>
      <ul className="products">
        <AppCarousel />
        {
          productStore.data.map(item => (
            <li key={Date.now() * Math.random()} >
              <div className="product_item">
                <div className="product_top">
                  <a href="" className='product_thumb'>
                    <img src="/public/sub2-16925001163071647798912.webp" alt="" />
                  </a>


                  <div className="product_info">
                    <a href="" className="product_name" style={{
                      fontSize: '20px',
                      textTransform: "uppercase",
                      color: '#000',
                    }}>{item.name}</a>
                    <div className="product_price">Mô tả: {item.description}</div>
                    <div className="product_price">Số lượng: {item.quantity}</div>
                    <div className="product_price">Giá: {item.price}đ</div>
                    <Button variant="outline-info" onClick={() => {
                      handleCreateCart({
                        userId: userStore.data?.id as number,
                        productId: item.id,
                        quantity: 1,
                        total: item.price,
                      })
                      console.log();
                    }}>mua</Button>{' '}
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

