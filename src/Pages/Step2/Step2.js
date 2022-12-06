import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { SignupContext } from '../../contexts/SignupProvider';
import LeftSide from '../LeftSide/LeftSide';
const Step2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const{signUp, setSignUp}=useContext(SignupContext)
    const navigate=useNavigate()

    const handleSignup = (data) => {
//    e.preventDefault()
   setSignUp({
    ...signUp,
    phone_number:data.code+data.phone,
    email:data.email
   })
        
    navigate('/step3')
    
    }

    return (
        <div className='grid grid-cols-2'>
        <LeftSide></LeftSide>
         <div className=' w-[516px] mt-24 mx-36 '>
             <h1 className='font-bold text-center  text-xl'>SignUp Form</h1>
             <form  onSubmit={handleSubmit(handleSignup)}>

                <div className='flex'>
                <div className="form-control w-[100px]  border-slate-400">
                     
                     <input type="text"  {...register("code", {
                        //  required: "Name is required"
                     })} className="input w-full max-w-xs" placeholder=''/>
                     <hr />
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                 </div>
                 <div className="form-control w-full max-w-xs border-slate-400">
                     
                     <input type="number" {...register("phone", {
                        //  required: "Name is required"
                     })} className="input w-full max-w-xs" placeholder='Write number'/>
                     <hr />
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                 </div>
                </div>

                 <div className="form-control w-full max-w-xs mt-16">
                     
                     <input type="email" {...register("email", {
                        //  required: "Name is required"
                     })} className="input w-full max-w-xs" placeholder='Write Email Address' />
                     <hr />
                     {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                 </div>

                
                <button onClick={() => navigate(-1)} className='mr-6' >Back</button>
                 <input className='btn btn-outline bg-[#1678CB] mt-4 text-white' value="Next Step" type="submit" />

             </form>
             <p className='mt-12'>Already have an account? <Link className='text-[#1678CB]' to="/login">Login Here</Link></p>
         </div>
     </div>
    );
};

export default Step2;