import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { SignupContext } from '../../contexts/SignupProvider';
import LeftSide from '../LeftSide/LeftSide';
const Step1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const{signUp, setSignUp}=useContext(SignupContext)
    const navigate=useNavigate()

    const handleSignup = (data) => {
//    e.preventDefault()
    
    setSignUp({
        ...signUp,
        first_name:data.fname,
        last_name:data.lname,

    })
        
    navigate('/step2')
    
    }

    return (
        <div className='grid lg:grid-cols-2'>
           <LeftSide></LeftSide>
            <div className=' w-full mt-24 lg:px-36 p-8'>
                <h1 className='font-bold  text-xl'>SignUp Form</h1>
                <form  onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs border-slate-400">
                        
                        <input type="text" {...register("fname", {
                            required: "Name is required"
                        })} className="input w-full max-w-xs" placeholder='Write First Name'/>
                        <hr />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-16">
                        
                        <input type="text" {...register("lname", {
                            required: "Name is required"
                        })} className="input w-full max-w-xs" placeholder='Write Last Name' />
                        <hr />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                   
                   
                    <input className='btn btn-outline bg-[#1678CB] mt-4 text-white' value="Next Step" type="submit" />

                </form>
                <p className='mt-12'>Already have an account? <Link className='text-[#1678CB]' to="/login">Login Here</Link></p>
            </div>
        </div>
    );
};

export default Step1;