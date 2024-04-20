import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { UseSelector, useSelector } from 'react-redux';
import { API_END_POINT } from "../utils/constant"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
    const user = useSelector((store) => store.app.user)
    const toggle = useSelector((store) => store.movie.toggle)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {
            const resp = await axios.get(`${API_END_POINT}/logout`)

            if (resp.data.success) {
                toast.success("You are logged out successfully :)")
            }
            dispatch(setUser(null))
            navigate("/")


        } catch (error) {
            console.log(error);
        }
    }

    const toggleHandler = () => {
        dispatch(setToggle())
    }

    return (
        <>
            <div className='absolute z-10 bg-gradient-to-b justify-between from-black flex w-[100%] align-middle
             
            '>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix logo' className='w-40 mx-4
                 
                ' />

                {

                    user && (

                        <div className='flex mx-6 my-3 text-white
                       
                        '>
                            <IoIosArrowDropdown size={25} className='mt-1' />
                            <h1 className='mx-1 text-lg'>{user.name}</h1>

                            <div className='ml-1'>
                                <button onClick={logoutHandler} className='bg-[#e50913] rounded-sm py-1 px-2 mx-2 text-white'>Log Out</button>
                                <button onClick={toggleHandler} className='bg-[#e50913] rounded-sm py-1 px-2 mx-2 text-white'>{toggle ? "Home" : "Search Movie"}</button>
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Header