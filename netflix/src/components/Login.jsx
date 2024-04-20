import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from "../utils/constant"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLoading } from '../redux/userSlice'


const Login = () => {

    const [isLogin, setIsLogin] = useState(false);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLoading = useSelector(store => store.app.isLoading);

    const loginHandler = () => {
        setIsLogin(!isLogin)
    }

    const getInputData = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true))

        if (isLogin) {
            // login

            const user = { email, password }
            try {
                const resp = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })


                if (resp.data.success) {
                    toast.success(resp.data.message);
                }
                dispatch(setUser(resp.data.user))
                navigate("/browse")

            } catch (error) {
                toast.error("something went wrong")
                console.log(error);
            } finally {
                dispatch(setLoading(false))
            }
        }
        else {
            // register
            dispatch(setLoading(true))

            const user = { name, email, password }
            try {
                const resp = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })

                if (resp.data.success) {
                    toast.success(resp.data.message);
                }

                setIsLogin(true)

            } catch (error) {
                toast.error("something went wrong")
                console.log(error);
            } finally {
                dispatch(setLoading(false))
            }
        }



        // clear input feilds 
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <Header />
            <div className='absolute overflow-hidden
            md:overflow-hidden'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background-image' className='h-[100vh] w-[100vw]' />
            </div>

            <form onSubmit={getInputData} className='absolute flex-col  p-10 my-36 left-0 right-0 mx-auto items-center justify-center bg-black bg-opacity-90
            2xl:w-[290px]
            xl:w-[240px]
            lg:w-[10px] lg:my-20
            lmb:w-[10px] lmb:px-10 lmb:h-[440px] lmb:p-5
            '>
                <div className='flex-col justify-center align-middle
                 lmb:w-6/12
                '>
                    <h1 className='text-white text-4xl text-center font-bold my-4
                    md:text-3xl
                    '>{isLogin ? "Login" : "Signup"}</h1>

                    {
                        !isLogin &&
                        <input placeholder='Name' type='text' className='py-3 px-3 w-64 rounded-sm my-2 bg-gray-800 outline-none text-white
                        2xl:w-56
                        xl:w-44
                        lg:w-40
                        md:w-40
                        lmb:w-40
                        ' required value={name} onChange={(e) => setName(e.target.value)} />
                    }

                    <input placeholder='Email' type='email' className='py-3 px-3 w-64 rounded-sm my-2 bg-gray-800 outline-none text-white
                     2xl:w-56
                     xl:w-44
                     lg:w-40
                     md:w-40
                     lmb:w-40
                    ' required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input placeholder='Password' type='password' className='py-3 px-3 w-64 rounded-sm my-2  bg-gray-800 outline-none text-white
                    2xl:w-56
                    xl:w-44
                    lg:w-40
                    md:w-40
                    lmb:w-40
                    ' required value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' className='text-white bg-[#e50913] text-lg rounded-sm py-2 px-9 w-64 my-3
                    2xl:w-56
                    xl:w-44
                    lg:w-40
                    md:w-40
                    lmb:w-40
                    '>{`${isLoading ? "loading..." : isLogin ? "Login" : "Signup"}`}</button>
                    <div className='flex'>
                        <p className='text-white '> {isLogin ? "New to Netflix?" : "Aleady have an account?"}</p>
                        <p className='text-purple-700 mx-2 cursor-pointer' onClick={loginHandler}>{isLogin ? "Signup" : "Login"}</p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login