import React, { useState } from 'react';

const TableData = ({data}) => {
const[date,setDate]=useState("2022-11-01")
const status = data?.attendance[date]

    return (
        <tr>
                  <td>
                    <select onChange={e=>setDate(e.target.value)}>
                    {
                        Object.keys(data?.attendance).map((optionDate, i) => {
                            return <option key={i} value={optionDate}>
                                {optionDate}
                            </option>
                        })
                    }
                    </select>
                  </td>
                  <td>{data?.name}</td>
                  <td>{status.status}</td>      
        </tr>
    );
};

export default TableData;