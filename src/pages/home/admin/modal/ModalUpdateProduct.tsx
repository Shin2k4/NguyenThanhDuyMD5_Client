import apis from '@/apis';
import { productAction } from '@/stores/slices/product.slice';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './modal.scss'
import { CreateProduct } from '@/apis/module/product';
import { StoreType } from '@/stores';

function ModalUpdateProduct(props) {

    const dispatch = useDispatch();
    useEffect(() => {

    }, [])
    const categoryStore = useSelector((store: StoreType) => store.categoryStore)

    function handleUpDateProduct(e, id: number, data: CreateProduct): void {
        e.preventDefault();

        data = {
            name: (e.target as any).productName.value,
            description: (e.target as any).Description.value,
            quantity: Number((e.target as any).Quantity.value),
            price: Number((e.target as any).Price.value),
            images: (e.target as any).Image.value,
            categoryId: Number((e.target as any).categoryId.value),
        }

        apis.product.updateProduct(id, data)
            .then(res => {
                dispatch(productAction.updateProduct(id))
                message.success('Sửa sản phẩm thành công!');
                props.onHide();

            })
            .catch(err => {
                err
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
                    Sửa sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e) => {
                    handleUpDateProduct(e, props.productId, props.data)
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
export default ModalUpdateProduct;