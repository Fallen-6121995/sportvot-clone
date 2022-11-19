import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Offcanvas,
  Nav,
  Container,
  Button,
  NavLink,
} from "react-bootstrap";
//Custom Component
import SidebarRow from "../SideNav/SidebarRow/SidebarRow";
import { MenuItems } from "../SideNav/MenuItems/MenuItems";
// import logo from "../../../Assets/Images/logo.svg";
// import { removeUserSession } from "../../../Utils/Common/Common";
import "../../styles/sidebar.module.css";

function Sidebar() {
  // const history = useHistory();

  // const logout = () => {
  //   removeUserSession();
  //   history.push("/");
  // };

  const [showProfile, SetShowProfile] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);
  // const [show, setShow] = useState(false);
  return (
    <>
      <style jsx>
        {`
        
          ::-webkit-scrollbar {
            width: 8px;
            /* Optional: just make scrollbar invisible */
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 1px;
            background-color: #d3d3d3;
            height: 80px;
          }

          .logout {
            cursor: pointer;
          }
            z-index: 1045;
          }
          .navbar-toggler:focus,
          .btn-close:focus {
            box-shadow: none !important;
          }

          .navbar-toggler {
            border: none !important;
          }

          .avatar-dropdown {
            background-color: #202225;
            width: 220px;
            right: 10px;
            padding: 20px;
            color: #fff;
            position: fixed;
            top: 50px;
            border-radius: 4px;
            z-index: 9999;
          }

          .avatar-dropdown h4 {
            font-size: 1rem;
            text-align: left;
          }

          .avatar-dropdown :hover {
            cursor: pointer;
          }

          .offcanvas-start {
            background-color: #202225 !important;
            width: 260px;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
          }

          .btn-close {
            background-image: url("../../../Assets/Images/close.svg") !important;
            background-size: 25px 50px !important;
            opacity: 0.9 !important;
          }

          .modal-logo {
            width: 65%;
          }

          .sidebarItems {
            text-decoration: none;
            color: white;
          }

          .sidebarItems:hover {
            color: white;
          }

          .dropdownList {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
          }

          .dropdownList-items {
            text-decoration: none;
            color: white;
            margin-left: 22px;
          }
          .navbar__link--active {
            color: #ff2120;
          }
          .dropdownList-items:hover {
            color: white;
          }

          .user-btn {
            background-color: #ff2120 !important;
            border: none !important;
            height: 40px !important;
            /* width: 60px; */
            font-size: 18px !important;
            font-weight: 500 !important;
          }
        `}
      </style>
      <Navbar fixed="top" bg="dark" varient="dark" expand={false}>
        <Container fluid>
          <div className="left-items">
            <Navbar.Toggle
              onClick={() => setShowSidenav(true)}
              aria-controls="offcanvasNavbar"
            />
            {/* <Link to="/"> */}
            <Navbar.Brand>{/* <img src={logo} width={120} /> */}</Navbar.Brand>
            {/* </Link> */}
          </div>
          <div className="right-items">
            <Navbar.Brand>
              <Button
                onClick={() => SetShowProfile(!showProfile)}
                className="btn-sm user-btn"
              >
                username
              </Button>
            </Navbar.Brand>
          </div>
          {showSidenav && (
            <>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {MenuItems.map((item, index) => {
                      return (
                        <div key={index}>
                          <NavLink className={"sidebarItems"} to={item.url}>
                            <SidebarRow status={false} title={item.title} />
                          </NavLink>
                          {/* {item.dropdown ? (
                        <>
                          <div
                            className="dropdownList"
                            onClick={() => setShow(!show)}
                          >
                            <SidebarRow status={false} title={item.title} />
                          </div>
                          <Link
                            key={index}
                            to={item.dropdown.url}
                            className="sidebarItems"
                          >
                            <SidebarRow
                              // clicked={}
                              status={false}
                              title={item.dropdown.title}
                            />
                          </Link>
                        </>
                      ) : (
                        <Link
                          key={index}
                          to={item.url}
                          className="sidebarItems"
                        >
                          <SidebarRow status={false} title={item.title} />
                        </Link>
                      )} */}
                        </div>
                      );
                    })}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )}
        </Container>
      </Navbar>
      {showProfile && (
        <div className="avatar-dropdown">
          <h4 className="avatar-item">
            {/* <LogoutIcon style={{ fontSize: 30, paddingRight: 10 }} /> */}
            Logout
          </h4>
        </div>
      )}
    </>
  );
}

export default Sidebar;
