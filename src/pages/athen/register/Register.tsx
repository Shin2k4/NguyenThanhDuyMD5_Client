import apis from '@/apis';
import { Modal } from 'antd';
import React, { useEffect } from 'react'
import "./register.scss"
import { CreateUser } from '@/apis/module/user.api';
export default function Register() {

    function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        let data: CreateUser = {
            userName: (e.target as any).username.value,
            email: (e.target as any).email.value,
            password: (e.target as any).password.value,
        }
        apis.user.register(data)
            .then(res => {

                Modal.success({
                    title: 'Thông báo',
                    content: res.data.message,
                    onOk() {
                        window.location.href = "/login"
                    }
                })
            })
            .catch(err => {
                Modal.error({
                    title: 'Thông báo',
                    content: err?.response?.data?.message.join(',') || 'Email đã tồn tại',
                })
            })
    }

    return (
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
                            handleRegister(e)
                        }}>
                            <div className="inputBox">
                                <input type="text" name='username' /> <i>Username</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" name='password' /> <i>Password</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" name='confirmPassword' /> <i>ConfirmPassword</i>
                            </div>
                            <div className="inputBox">
                                {" "}
                                <input type="text" name='email' /> <i>Email</i>
                            </div>
                            <div className="links">
                                {" "}
                                <p>Do you already have an account?</p><a href="/login">Login</a>
                            </div>

                            <div className="inputBox">
                                <input type="submit" defaultValue="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>{" "}

        </>


    )
}
