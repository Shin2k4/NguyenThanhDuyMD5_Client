import { StoreType } from '@/stores';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ChatAdmin from '@api/chat-admin/index';
import './chat.scss'
export default function Chat() {
    const chatStore = useSelector((store: StoreType) => store.chatStore);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            ChatAdmin.connect();
        }
    }, [])
    return (
        <div className='chat_list' >
            <div className='user_list'>
                <nav>a</nav>    
            </div>
            <div className="chat_type">
                <div className="chat">
                    <div className='content'>
                        <div className="left_content">
                            b
                        </div>
                        <div className="rigth_content">
                            c
                        </div>
                    </div>
                </div>
                <div className="bottom_chat">
                    <input type="text" />
                </div>
            </div>
        </div>

    )
}
