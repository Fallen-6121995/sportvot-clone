import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import navbarStyle from "../../styles/nav.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PlayBtn } from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function Navigation() {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    // <div className={`${navbar.nav} ${show && navbar.nav__black}`}>
    //   <div className={navbar.nav__contents}>
    //     {/* Left side */}
    //     <div className={navbar.nav__logo__container}>
    //     <img
    //       className={navbar.nav__logo}
    //       src="https://d25s2jqw4qdf1e.cloudfront.net/cdc757ec-0b39-48ba-9030-d9a43fe8a885.png"
    //       alt="logo"
    //     />
    //     <img className={navbar.nav__logo}
    //       src="	https://d25s2jqw4qdf1e.cloudfront.net/a3d80c25-36d4-4ab5-ae5c-037f525889ca.png"
    //       alt="logo" />
    //     </div>
    //     {/* center */}
    //     <div>
    //       <ul className={navbar.nav__links}>
    //         <li>Home</li>
    //         <li>Live-TV</li>
    //         <li>Cloud Studio</li>
    //         <li>Contact Us</li>
    //       </ul>
    //     </div>
    //     {/* Right side */}
    //     <div>
    //     <Button size="sm"
    //       className={navbar.nav__avatar}
    //     >GET THE APP</Button>
    //     </div>
    //   </div>
    // </div>
    <div
      className={`main-navbar px-4 fixed-top ${show && navbarStyle.nav__black}`}
    >
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className={navbarStyle.navBrand__container}>
              <img
                className={navbarStyle.nav__logo}
                src="https://d25s2jqw4qdf1e.cloudfront.net/cdc757ec-0b39-48ba-9030-d9a43fe8a885.png"
                alt="logo"
              />
              <img
                className={navbarStyle.nav__logo2}
                src="	https://d25s2jqw4qdf1e.cloudfront.net/a3d80c25-36d4-4ab5-ae5c-037f525889ca.png"
                alt="logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Link className="text-white text-uppercase" href="/">
                Home
              </Link>
              <Nav.Link
                className="text-white ms-md-4 text-uppercase"
                href="/live_tv"
              >
                <div className={navbarStyle.LiveLink}>
                  <div className={navbarStyle.liveIcon}>
                    <PlayBtn color="#ff0000" fontSize={20} />
                  </div>
                  Live-Tv
                </div>
              </Nav.Link>
              <Nav.Link className="text-white ms-md-4 text-uppercase" href="#">
                Cloud Studio
              </Nav.Link>
              <Nav.Link className="text-white ms-md-4 text-uppercase" href="#">
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex ms-md-4">
              <Button
                className={`${navbarStyle.getTheAppBtn} btn btn-outline-light text-uppercase`}
                variant="outline-success"
              >
                GET THE APP
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
