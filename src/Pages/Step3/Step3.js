import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SignupContext } from '../../contexts/SignupProvider';
import LeftSide from '../LeftSide/LeftSide';

const Step3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signUp, setSignUp } = useContext(SignupContext)
    const navigate = useNavigate()

    const handleSignup = (data) => {
        //    e.preventDefault()

        setSignUp({
            ...signUp,
            password: data.password

        })
        console.log(signUp);

        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(signUp)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }


    return (
        <div className='grid grid-cols-2'>
            <LeftSide></LeftSide>
            <div className=' w-[516px] mt-24 mx-36 '>
                <h1 className='font-bold text-center  text-xl'>SignUp Form</h1>
                <form onSubmit={handleSubmit(handleSignup)}>


                    <div className="form-control w-full max-w-xs mt-16">

                        <input type="password" {...register("password", {
                            minLength: { value: 8, message: 'password must be 8 characters or more' }
                        })} className="input w-full max-w-xs" placeholder='Write password' />
                        <hr />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>


                    <button onClick={() => navigate(-1)} className='mr-6' >Back</button>
                    <input className='btn btn-outline bg-[#1678CB] mt-4 text-white' value="Next Step" type="submit" />

                </form>
                <p className='mt-12'>Already have an account? <Link className='text-[#1678CB]' to="/login">Login Here</Link></p>
            </div>
        </div>
    );
};

export default Step3;