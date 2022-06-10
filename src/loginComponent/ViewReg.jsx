import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const ViewReg = () => {

  const [regis, setRegis] = useState([]);
  useEffect(() => {
    // console.log("Kya ho raha h")
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/Registration/");
    setRegis(result.data);
  };

  const deleteRegistration = async id =>{
    await axios.delete(`http://localhost:5000/api/Registration/${id}`);
     loadUsers();
  }
   
  return (
  
    <div>
      <div className="container">
        <h3 className="text-center">Registration Details</h3>
        <hr />
        <div className="row mt-4">
          <table className="table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id </th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             {
                 regis.map((regis,index)=>(
                     <tr key={regis.Reg_id}>
                         <th scope="row">{index+1}</th>
                         <td>{regis.Name}</td>
                         <td>{regis.Email_id}</td>
                         <td>{regis.Mobile_No}</td>
                      
                         <td > 
                         <Link className="btn btn-outline-success mx-2" to="/AllRegistration"> View</Link>
                         <Link className="btn btn-outline-primary mx-2" to={`/EditRegistration/${regis.Reg_id}`}> Edit</Link>
                         <Link className="btn btn-outline-danger" to="" onClick={()=>deleteRegistration(regis.Reg_id)}> Delete</Link>
                         </td>
                     </tr>
                 ))
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewReg;
