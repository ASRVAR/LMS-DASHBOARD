import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Registration = () => {
  //const defaultImage="RegPhotos/agl.jpg";
  let redirect = useNavigate();
  const tableInitialFieldValue={
    Name: "",
    Email_id: "",
    Mobile_No: "",
    Address: "",
    Photo: "",
    Password: "",
  }
  const [regAdd, setRegAdd] = useState(tableInitialFieldValue);
  const { Name, Email_id, Mobile_No, Address, Photo, Password } = regAdd;
  const onInputChange = (e) => {  
    setRegAdd({ ...regAdd, [e.target.name]:e.target.value });
    console.log({[e.target.name]:e.target.value});
  };

// const showPrivewImg=e=>{
//   if(e.target.files && e.target.files[0]){
//     let imageFile=e.target.files[0];
//     const reader= new FileReader();
//     reader.onload=x=>{
//                   setRegAdd({
//                     ...regAdd,
//                       imageFile,
//                       Photo:x.target.result
//                   })
//     }
//     reader.readAsDataURL(Photo)
//   }
//   else{
//     setRegAdd({
//       ...regAdd,
//         Photo:defaultImage
//     })
// }
// }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/Registration/", regAdd);
    redirect("/registrationDetails"); //  useNavigate se hm Redirect Karate h Dusre Page Par
  };
        
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 shadow p-3 mb-5 rounded"
            style={{ backgroundColor: "#427874" }}
          >
            <h3
              className="text-center"
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              LMS Registration
            </h3>
            <form autoComplite="off" onSubmit={e => onSubmit(e)}>
              <div className="row mt-4">
                <img src={Photo} className="card-img-top" />
                <div className="col">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="Name"
                    value={Name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Email Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Id"
                    name="Email_id"
                    value={Email_id}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="Mobile_No"
                    value={Mobile_No}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="Address"
                    value={Address}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="form-label">Photo</label>
                  <input
                    type="file"
                    className="form-control"
                   
                    placeholder="Photo"
                    name="Photo"
                    value={Photo}
                   // onChange={(e) => setRegAdd({...regAdd, "Photo":e.target.files[0]})}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Pasword</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    value={Password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4 mx-2">
                Registration
              </button>
              {/* <button type="submit" className="btn btn-primary mt-4">
              <Link to="/Login">Login</Link>
            </button> */}
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Registration;
