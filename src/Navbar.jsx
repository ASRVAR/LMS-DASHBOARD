import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import AllRegistration from "./loginComponent/AllRegistration";
import EditRegistration from "./loginComponent/EditRegistration";
import Login from "./loginComponent/Login";
import Reg from "./loginComponent/Registration";
import ViewReg from "./loginComponent/ViewReg";

function Navbar() {
  return (
    <BrowserRouter>

  <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">

  <div className="container">
    <a className="navbar-brand" href="#">Hello Pawan..!!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Download
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>  <Link className="btn btn-outline-success mx-2" to="/registrationDetails">Edit View</Link></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Master</a>
        </li>
      </ul>
      <form className="d-flex" role="search">   
            <Link className="btn btn-outline-success mx-2" to="/Registration">Registration</Link>
            <Link className="btn btn-outline-success mx-2" to="/Login">Login</Link>   
            <Link className="btn btn-outline-success " to="/registrationDetails">Show Details</Link>  
            
      </form>
    </div>
  </div>

</nav>
</div> 


      <Routes>
        <Route exact path="/Registration"  element={<Reg />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/EditRegistration/:id" element={<EditRegistration />} />
        <Route exact path="/registrationDetails/" element={<ViewReg />} />
        <Route exact path="/allregistration" element={<AllRegistration />}/>
      </Routes>   
    </BrowserRouter>
  );
}

export default Navbar;
