import apis from '@/apis';
import { StoreType, useAppDispatch } from '@/stores';
import { productAction } from '@/stores/slices/product.slice';
import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalAddProduct from '../modal/ModalAddProduct';
import ModalUpdateProduct from '../modal/ModalUpdateProduct';

export default function Product() {
    const [modalAdd, setModalAdd] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    const [id, setId] = useState(0);
    const productStore = useSelector((store: StoreType) => store.productStore)

    useEffect(() => {
        useAppDispatch.dispatchProduct()
    }, [])

    function handleDeleteProduct(id) {

        apis.product.deleteProduct(id)

            .then(res => {
                dispatch(productAction.deleteProduct(id))
                message.success('Xóa sản phẩm thành công!');
            })
            .catch(err => {
                err
            })
    }
    return (
        <div className="recent_grid">
            <div className="projects">
                <div className="card">
                    <div className="card_header">
                        <h2>Product</h2>
                        <div className=" btn_button">
                            <button onClick={() => {
                                setModalAdd(true)
                            }}>Add Product </button>
                            <ModalAddProduct

                                show={modalAdd}
                                onHide={() => setModalAdd(false)}
                            />
                        </div>
                    </div>
                    <div className="card_body">
                        <div className="table_responesive">
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <td>Product name</td>
                                        <td>Description</td>
                                        <td>Quantity</td>
                                        <td>Images</td>
                                        <td>Price</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productStore.data.map(item => {
                                            return (
                                                <tr key={(Date.now() * Math.random())}>
                                                    <td>{item.name}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.images}</td>
                                                    <td>{item.price}</td>
                                                    <tr>
                                                        <td key={(Date.now() * Math.random())}><button onClick={() => {
                                                            handleDeleteProduct(item.id)
                                                        }}>xoá</button></td>
                                                        <td><button onClick={() => {
                                                            setModalShow(true)
                                                            setId(item.id)
                                                        }}>sửa </button>
                                                            <ModalUpdateProduct
                                                                productId = {id}
                                                                show={modalShow}
                                                                onHide={() => setModalShow(false)}
                                                            /></td>
                                                    </tr>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
