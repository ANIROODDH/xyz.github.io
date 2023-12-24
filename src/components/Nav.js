import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate();
  const handlelogout = async(e) => {
    localStorage.removeItem("authtoken");
    navigate("/login")
  }

  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className=" container-fluid ">
          <Link className="navbar-brand" to="/">Gofood</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
            </li>

            {(localStorage.getItem("authtoken")) ?
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">My orders</Link>
              </li> : " "
            }

          </ul>
          {(!localStorage.getItem("authtoken")) ?
            <div className='d-flex'>
              <Link className="btn bg-white text-sucess mx-1" aria-current="page" to="/Login">login</Link>
              <Link className="btn bg-white text-sucess mx-1" aria-current="page" to="/signup">signup</Link>
            </div> :
            < div className='d-flex'>
              <Link className="btn bg-white text-sucess mx-1" aria-current="page" to="/signup">My card</Link>
              <Link className="btn bg-white text-danger mx-1" aria-current="page" onClick={handlelogout}>logout</Link>
            </div>
          }
        </div>

      </nav>
    </div>
  )
}
