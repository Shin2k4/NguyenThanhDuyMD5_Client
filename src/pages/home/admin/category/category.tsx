import React, { useState } from 'react'
import ModalAddCategory from '../modal/ModalAddcategory'
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import apis from '@/apis';
import { categoryAction } from '@/stores/slices/category.slice';
import { message } from 'antd';

export default function Category() {
  const [modalAddCategory, setModalAddCateModalAddCategory] = useState(false);
  const categoryStore = useSelector((store: StoreType) => store.categoryStore)
  const dispatch = useDispatch();

  function handleDeleteCategory(id: number) {
    apis.category.delete(id)

      .then(res => {
        dispatch(categoryAction.deleteCategory(id))
        message.success('Xóa sản phẩm thành công!');

      })
      .catch(err => {
        err
      })
  }
  
  return (
    <div>
      <div className=" btn_button">
        <button onClick={() => {
          setModalAddCateModalAddCategory(true)
        }}>Add category </button>
        <ModalAddCategory
          show={modalAddCategory}
          onHide={() => setModalAddCateModalAddCategory(false)}
        />
      </div>
      <div className="recent_grid">

        {
          categoryStore.data.map(item => {
            return (
              <div className="projects" key={(Date.now() * Math.random())}>
                <div className="card">
                  <div className="card_header">
                    <h2>{item.name}</h2>
                    <div className='btn_button'>
                      <button onClick={() => {
                        handleDeleteCategory(item.id)
                      }}
                      >xoá</button>
                      <button>sửa</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}
