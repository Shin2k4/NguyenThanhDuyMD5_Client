import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StoreType, useAppDispatch } from '@/stores';
import { cartAction } from '@/stores/slices/cart.slice';
import { message } from 'antd';
import { Button } from 'react-bootstrap';
import apis from '@/apis';
import ModalBuild from './bill/ModalBill';

export default function Cart() {
    const cartStore = useSelector((store: StoreType) => store.cartStore)
    const productStore = useSelector((store: StoreType) => store.productStore)
    const billStore = useSelector((store: StoreType) => store.billStore)

    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState(0);

    function handleDeleteProduct(id) {
        apis.cart.delete(id)
            .then(res => {
                dispatch(cartAction.delete(id))
                message.success('Xóa sản phẩm thành công!');
            })
            .catch(err => {
                err
            })
    }

    const findProductName = (id) => {
        const product = productStore.data.find((product) => {
            return product.id === id
        })
        return product.name
    }
    const findProductPrice = (id) => {
        const product = productStore.data.find((product) => {
            return product.id === id
        })
        return product.price
    }

    return (
        <div className='cart_page'>
            <h1>Cart</h1>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Feature</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartStore.data.map((item) =>

                            <tr key={Date.now() * Math.random()}>
                                <td>{item.id}</td>
                                <td>{
                                    productStore.data.find((product) => {
                                        return product.id === item.productId
                                    })?.name
                                }
                                </td>
                                <td>{item.quantity}</td>
                                <td>{
                                    productStore.data.find((product) => {
                                        return product.id === item.productId
                                    })?.price
                                }đ</td>
                                <td>{
                                    item.total
                                }đ</td>
                                <td><button
                                    onClick={() => handleDeleteProduct(item.id)}
                                    className='btn btn-danger'
                                >xoá</button></td>
                            </tr>
                        )

                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={0}>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{
                            cartStore.data.reduce((total, item) => {
                                return total + Number(item.total);
                            }, 0)
                        }đ</td>
                        <td>
                            <Button onClick={() => {
                                setModalShow(true)
                                setId(cartStore.data[0].id)
                            }} >Thanh toán</Button>
                            <ModalBuild
                                cartID={id}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="table" >
                <h2>Bill</h2>
                <table className='table_bottom' >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            billStore.data.map((item) => {
                                const parsedProductId = JSON.parse(item.productId);
                                return (
                                    <tr key={Date.now() * Math.random()}>
                                        <td>{item.id}</td>
                                        {
                                            parsedProductId.map((item1) => {
                                                return <div>{findProductName(item1)}</div>
                                            })
                                        }
                                        <td>{item.quantity}</td>
                                        <td>{parsedProductId.map((item2) => {
                                            return <div>{findProductPrice(item2)}</div>
                                        })}</td>
                                        <td>{item.Total}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}
