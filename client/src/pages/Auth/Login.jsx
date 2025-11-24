    import { useState } from 'react'

    import { Link, useNavigate } from 'react-router-dom'
    import { Form, Input, Button, message } from 'antd'
    import axios from "axios"
    const Login = () => {
        const [loading, setLoading] = useState(false)
        const navigate = useNavigate()

        const onFinish = async (values) => {
            const { email, password } = values
            const formData = { email, password }

            try {
                setLoading(true)
                const res = await axios.post('http://localhost:8000/api/auth/login', formData)
                message.success("Login successfully")
                const { user, token } = res.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/")
            } catch (error) {
                console.error(error);
                message.error(error.response?.data?.message || "Something went wrong");
            } finally { setLoading(false); }
        }

        return (
            <>
                <div className='flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
                    <div className='w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 text-center'>
                        <h1 className='text-center font-bold text-2xl mb-4'>Login</h1>

                        <Form
                            layout='vertical'
                            className='space-2'
                            onFinish={onFinish}>
                            <Form.Item
                                name="email" rules={[
                                    { required: true, message: "Please enter your Email" },
                                    { type: "email", message: "Please enter a valid Email address" },
                                    { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: "Please enter a valid Email address" },]}>


                                <Input placeholder="Email" autoComplete="username"></Input>
                            </Form.Item>
                            <Form.Item
                                name="password" rules={[
                                    { required: true, message: "Please enter your Password" },
                                    { min: 6, message: "Password must be 6 characters long" }]}>
                                <Input.Password placeholder="Password" autoComplete="current-password"></Input.Password>
                            </Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full align-center' loading={loading}>Login</Button>
                        </Form>
                        <p className="py-3">Don't have a account <Link to="/auth/register" >Register</Link ></p>
                    </div>
                </div>
            </>
        )
    }

    export default Login