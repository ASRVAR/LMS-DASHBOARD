import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'

function AllRegistration() {
    const [Data, setAllData]= useState([]);

    useEffect(()=>{
        AllData();
    },[]);
    const AllData = async ()=>{
       const AllRegistrationData = await axios.get("http://localhost:5000/api/Registration/");
        setAllData(AllRegistrationData.data);
    }

  return (
    
        <div>
      <div className="container mt-3">
        <h3 className="text-center">All Registration Details</h3>
        <hr />
        <div className="row mt-4">
          <table className="table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id </th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Address</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
             {
                 Data.map((Data,index)=>(
                     <tr key={Data.Reg_id}>
                         <th scope="row">{index+1}</th>
                         <td>{Data.Name}</td>
                         <td>{Data.Email_id}</td>
                         <td>{Data.Mobile_No}</td>
                         <td>{Data.Address}</td>
                         <td>{Data.Password}</td>
                     </tr>
                 ))
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
  )
}

export default AllRegistration