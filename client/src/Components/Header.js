import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  let Links = [
    { name: "Ticket", link: "/payment" },
    { name: "Contact us", link: "/www.redbus.in/info/contactus" },
    { name: "All Buses", link: "/allbus" },
  ];
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-100 fixed-top">
      <nav className="navbar navbar-expand-md navbar-light bg-white py-4">
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={() => props.setAuthentication(false)}>
            <span className="text-3xl text-primary mr-1 pt-2">
              <ion-icon name="bus"></ion-icon>
            </span>
            Reserve
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ml-auto">
            {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 md:hidden"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
              {!props.authentication && (
                <>
                  <li className="nav-item">
                    <button className="btn btn-success mr-2" onClick={() => props.setAuthentication(false)}>
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Register
                    </a>
                  </li>
                </>
              )}
              {props.authentication && (
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <div className="d-flex align-items-center">
                      <div className="font-weight-bold text-gray-700 rounded-circle bg-white d-flex align-items-center justify-content-center font-mono h-40 w-40 text-xl bg-orange">
                        N
                      </div>
                      <div className="mt-2 ml-2">My Profile</div>
                    </div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


//rudi and grp test maths  -->12:30pm
//prady and mannan test bio -->12:30pm
//icse_9_group  -->12:30pm[hardik, yash, anurag]
//mudit_dheeraj_harshita_abcd[3pm]
//rounak_vikas[4pm]
//sonu_bacha_party[5pm]
//PROJECT_ANALYSIS[]
//QUIZ KARNA H


