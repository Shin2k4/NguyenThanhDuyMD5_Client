import apis from '@/apis';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import "./modal.scss"
import { StoreType, useAppDispatch } from '@/stores';
import { cartAction } from '@/stores/slices/cart.slice';
import { billAction } from '@/stores/slices/bill.slice';


function ModalBill(props) {
  console.log(props);

  useEffect(() => {
    useAppDispatch.dispatchCategory()
  }, [])
  const cartStore = useSelector((store: StoreType) => store.cartStore)
  const productStore = useSelector((store: StoreType) => store.productStore)
  const billStore = useSelector((store: StoreType) => store.billStore)

  useEffect(() => {
    useAppDispatch.dispatchProduct()
  }, [])

  useEffect(() => {
    useAppDispatch.dispatchBill()
  }, [])
  const dispatch = useDispatch()

  const handleCreateBill = async (dataCreate: {
    productId: string,
    quantity: number,
    userId: number,
    Total: number,
  }) => {

    try {
      let resCreateBill = await apis.bill.create(dataCreate);

      if (resCreateBill.status != 200) {
        throw {
          message: "Lỗi khi thanh toán"
        }
      }
      message.success("Chúc mừng bạn đã mất tiền")
      dispatch(billAction.create(resCreateBill.data.data))
    } catch (err) {
      message.error("Bình tĩnh")
    }
    cartStore.data.reduce((total, item) => {
      return total + Number(item.total);
    }, 0);
  }


  // function handleDeleteCart(id: number) {
  //   console.log("davao");

  //   apis.cart.delete({ id })
  //     .then(res => {
  //       dispatch(cartAction.delete(id))
  //       message.success('');
  //     })
  //     .catch(err => {
  //       err
  //     })
  // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        color: "black",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hoá đơn của bạn
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "auto", overflowY: "scroll" }}>
        <div className="cart_page">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleCreateBill({
              productId: JSON.stringify(cartStore.data.map(item => item.productId)),
              quantity: cartStore.data.reduce((accumulator, item) => accumulator + item.quantity, 0),
              userId: cartStore.data[0].userId,
              Total: cartStore.data.reduce((total, item) => {
                return total + Number(item.total);
              }, 0)
            })

            // handleDeleteCart(props.cartID)

            console.log(props.id);

          }} style={{ width: '100%' }}>
            <div className="table">
              <div id='taskBar'>
                <span>ID</span>
                <span >Product Name</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              {
                cartStore.data.map((item) =>
                  <div key={(Date.now()) * Math.random()}>
                    <div className='content'>
                      <span>{item.id}</span>
                      <span>
                        {
                          productStore.data.find((product) => {
                            return product.id === item.productId
                          })?.name
                        }
                      </span>
                      <span>
                        {
                          item.quantity
                        }
                      </span>
                      <span>
                        {
                          productStore.data.find((product) => {
                            return product.id == item.productId
                          })?.price
                        }
                      </span>
                      <span>
                        {
                          productStore.data.find((product) => {
                            return product.id == item.productId
                          })?.price * item.quantity
                        }
                      </span>
                    </div>

                  </div>
                )
              }
              <div className='footer'>
                <span>Total</span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  {
                    cartStore.data.reduce((total, item) => {
                      return total + Number(item.total);
                    }, 0)
                  }
                </span>
              </div>
            </div>
            <Button type='submit' >Thanh Toán</Button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer >
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalBill;