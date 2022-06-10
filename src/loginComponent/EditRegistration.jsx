import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import registrationDataService from "../allServices/Services";


const EditRegistration = () => {
  //const defaultImage="RegPhotos/agl.jpg";
  let redirect = useNavigate();
  const { id } = useParams();
  
  const tableInitialFieldName = {
    Name: "",
    Email_id: "",
    Mobile_No: "",
    Address: "",
    Photo: "",
    Password: ""
  };

  const [regEdit, setReg] = useState(tableInitialFieldName);

  const getRegistration = id => {
    registrationDataService.get(id)
      .then(response => {
        setReg(response.data[0]);
       // console.log(response.data[0]);
      })
      .catch(e => {
      //  alert(e);
      });
  };
  useEffect(() => {
    if (id)
    getRegistration(id);
    else
    console.log("No data Show");
  }, []);
  //console.log(regEdit);

  const onInputChange = e => {
    setReg({ ...regEdit, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/Registration/${id}`, regEdit);
    redirect("./loginComponent/ViewReg"); //  useNavigate se hm Redirect Karate h Dusre Page Par
  };
  
//   useEffect(() => {
//    async function getLoadRegistration(){
//     try{
//       // const loadData=await axios.get(`http://localhost:5000/api/Registration/${id}`);
//       // setReg(loadData.data);
//       loadregistration(id);
//     }
//     catch(error){
// console.log("Something is Worng");
//     }
//   }
//   getLoadRegistration(id);
//   },[id]);

//   const loadregistration = async () => { 
//     const loadData = await axios.get(`http://localhost:5000/api/Registration/${id}`)
//     .then((response) =>{
//       setReg(response.data);
//     })
   
//   };

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
              LMS Update Registration
            </h3>
            <form onSubmit={e => onSubmit(e)}>
              <div className="row mt-4">

                <div className="col">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="Name"
                    id="Name"
                    Value={regEdit.Name}
                    onChange={e=>onInputChange(e)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Email Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Id"
                    id="Email_id"
                    name="Email_id"
                    Value={regEdit.Email_id}
                    onChange={e=>onInputChange(e)}
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
                    value={regEdit.Mobile_No}
                    id="Mobile_No"
                    onChange={e=>onInputChange(e)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="Address"
                    value={regEdit.Address}
                    id="Address"
                    onChange={e=>onInputChange(e)}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="form-label">Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    placeholder="Photo"
                    name="Photo"
                    // value={Photo}
                    id="Photo"
                  />
                </div>
                <div className="col">
                  <label className="form-label">Pasword</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    value={regEdit.Password}
                    id="Password"
                    onChange={e=>onInputChange(e)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-warning mt-4 mx-2">
                Update Registration
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

export default EditRegistration;
