import apis from '@/apis';
import { productAction } from '@/stores/slices/product.slice';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './modal.scss'
import { StoreType } from '@/stores';

function ModalAddProduct(props) {
    
    const dispatch = useDispatch();
    useEffect(() => {

    }, [])
    const categoryStore = useSelector((store: StoreType) => store.categoryStore)
    function handleAddProduct(e) {
        e.preventDefault();
        const newProduct = {
            name: (e.target as any).productName.value,
            description: (e.target as any).Description.value,
            quantity: (e.target as any).Quantity.value,
            images: (e.target as any).Image.value,
            price: (e.target as any).Price.value,
            categoryId: (e.target as any).categoryId.value,
        }

        apis.product.createProduct(newProduct)
            .then(res => {
                dispatch(productAction.addProduct(res.data.data))
                message.success('thêm sản phẩm thành công!');
                props.onHide();

            })
            .catch(err => {
                Modal({
                    title: 'Thông báo',
                    content: err?.response?.data?.message.join(',') || 'loi khong xac dinh!',
                })
            })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e) => {
                    handleAddProduct(e)

                }} style={{ width: '100%' }}>
                    <p>Product name</p>
                    <input type="text" name='productName' />
                    <p>Description</p>
                    <input type="text" name='Description' />
                    <p>Quantity</p>
                    <input type="number" name='Quantity' />
                    <p>Image</p>
                    <input type="file" name='Image' />
                    <p>Price</p>
                    <input type="number" name='Price' />

                    <select name="categoryId" id="category">
                        <option value="0">Select a category</option>
                        {
                            categoryStore.data?.map((category) => (
                                <option key={(Date.now() + Math.random())} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                    <Button type='submit'>Add</Button>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );
}
export default ModalAddProduct;