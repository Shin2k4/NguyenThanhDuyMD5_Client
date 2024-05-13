import apis from '@/apis';
import { categoryAction } from '@/stores/slices/category.slice';
import { message } from 'antd';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/stores';

function ModalAddCategory(props) {
    useEffect(() => {
        useAppDispatch.dispatchCategory()
    }, [])

    const dispatch = useDispatch();

    function handleAddCategory(e) {
        e.preventDefault();
        const newCategory = {
            name: (e.target as any).categoryName.value,
        }

        apis.category.create(newCategory)
            .then(res => {
                dispatch(categoryAction.addCategory(res.data.data))
                message.success('thêm danh mục thành công!');
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
                    Thêm danh mục
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleAddCategory} style={{ width: '100%' }}>
                    <p>Category name</p>
                    <input type="text" name='categoryName' id='files' />

                    <Button type='submit'>Add</Button>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );
}
export default ModalAddCategory;
