import React from 'react';
import { useQuery } from '@tanstack/react-query';
import logo from '../../assets/Image/logo.png'

const Attendence = () => {
     
    const {data:test=[]}=useQuery({
        queryKey:['test'],
        queryFn:async()=>{
            try{
                const res=await fetch('https://test.nexisltd.com/test',{
                    headers:{
                        authorization:`bearer ${localStorage.getItem('access_token')}`
                    }
                })
                const data=await res.json()
                return data
            }
            catch(error){
                console.log(error.message);
            }
        }
    })
    console.log(test);
    return (
        <div>
            <img src={logo} alt="" />
            <h2 className="text-3xl text-center my-6">Attendance Information</h2>

            <div className="overflow-x-auto px-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Employee Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            test.map((attandance, i) => <tr key={attandance.id}>
                
                                <td>{date}</td>
                                <td>{name}</td>
                                <td>{status}</td>

                            </tr>
                            )
                        } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendence;