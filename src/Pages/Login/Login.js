import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const handleSignup = (data) => {
        console.log(data);
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email:data.email,
                password:data.password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('')
            })

    }



    return (
        <div className='grid lg:grid-cols-2'>
            <LeftSide></LeftSide>
            <div className=' w-full mt-24 lg:px-36 p-8'>
                <h1 className='font-bold  text-xl'>Login Form</h1>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs border-slate-400">

                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })} className="input w-full max-w-xs" placeholder='Write Email Address' />
                        <hr />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-16">

                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: 'password must be 8 characters or longer' }
                        })} className="input w-full max-w-xs" placeholder='Write Password' />
                        <hr />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>



                    <input className='btn btn-outline bg-[#1678CB] mt-4 text-white' value="Login" type="submit" />

                </form>
                <p className='mt-12'>Don't have an account? <Link className='text-[#1678CB]' to="/">SIGNUP HERE</Link></p>
            </div>
        </div>
    );
};

export default Login;