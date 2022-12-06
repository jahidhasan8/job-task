import React from 'react';
import istock from '../../assets/Image/istock.png'
import logo from '../../assets/Image/logo.png'
const LeftSide = () => {
    return (
        <div>
             <div className=' w-full lg:mx-14 mt-6'>
    
                  <img  src={logo} alt="" />
    
                <div>
                <img className='w-full' src={istock} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftSide;