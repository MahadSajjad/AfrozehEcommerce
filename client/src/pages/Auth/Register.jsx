import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
const Register = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const { fullName, email, password, confirmPassword } = values

        if (password !== confirmPassword) { return message.error("Password does not match") }
        const formData = { fullName , email , password}
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:8000/api/auth/register", formData )
            message.success("Registration successful");
            const { user, token } = res.data;
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
                <div className='w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 '>
                    <h1 className='text-center font-bold text-2xl mb-4'>Register</h1>

                    <Form
                        layout='vertical'
                        className='space-2'
                        onFinish={onFinish}>
                        <Form.Item
                            name="fullName" rules={[
                                { required: true, message: "Please enter your Full Name" },
                                { min: 3, message: "Name must be at least 3 characters long" },
                                { max: 50, message: "Name cannot exceed 50 characters" },
                                { pattern: /^[A-Za-z\s]+$/, message: "Name can only contain letters and spaces" }]}>
                            <Input placeholder="Full Name"></Input>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your Email" },
                                { type: "email", message: "Invalid email format" },
                                { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: "Please enter a valid Email address" },]}>
                            <Input placeholder="Email" id="email" type="email" autoComplete="username"></Input>
                        </Form.Item>
                        <Form.Item
                            name="password" rules={[
                                { required: true, message: "Please enter your Password" },
                                { min: 6, message: "Password must be 6 characters long" }]}>
                            <Input.Password placeholder="Password" autoComplete="new-password"></Input.Password>
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword" rules={[{ required: true, message: "Confirm your Password" }]}>
                            <Input.Password placeholder="Confirm Password" autoComplete='new-password'></Input.Password>
                        </Form.Item>
                        <Button type='primary' htmlType='submit' className='w-full align-center' loading={loading}>Register</Button>
                    </Form>
                    <p className='my-2 text-center'>Have a account <Link to="/auth/login" >Login</Link ></p>

                </div>
            </div>
        </>
    )
}

export default Register