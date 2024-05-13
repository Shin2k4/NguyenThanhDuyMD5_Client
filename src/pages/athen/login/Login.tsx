import apis from '@/apis';
import { Modal, message } from 'antd';
import React from 'react'
import "./login.scss"
import { LoginUser } from '@/apis/module/user.api';
export default function Login() {

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        let data: LoginUser = {
            userName: (e.target as any).userName.value,
            password: (e.target as any).password.value
        }
        
        apis.user.login(data)
            .then(res=>{
                localStorage.setItem('token', res.data.token);
                message.success('đăng nhập thành công!');
                window.location.href = '/'
            })
            
            .catch(err => {
                Modal.error({
                    title: 'Thông báo',
                    content: err?.response?.data?.message.join(',') || 'loi khong xac dinh!',
                })
            })
    }
    return (
        <>
            <>
                <section>
                    {" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
                    <span /> <span /> <span /> <span />
                    <div className="signin">
                        <div className="content">
                            <h2>Sign In</h2>
                            <form className="form" onSubmit={(e) => {
                                handleLogin(e)
                            }}>
                                <div className="inputBox">
                                    <input type="text" name='userName' /> <i>Username</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" name='password' /> <i>Password</i>
                                </div>
                                <div className="links">
                                    {" "}
                                    <a href="#">Forgot Password</a> <a href="/register">Signup</a>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" defaultValue="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>{" "}

            </>

        </>
    )
}
