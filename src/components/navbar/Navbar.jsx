import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import isLogin from "../../utils/Utils";

    function MyNavbar() {
      const [loginState, setLoginState] = useState(isLogin() ? "خروج" : "ورود");

      const clickHandler = () => {
          if (loginState == "خروج") {
              localStorage.setItem("username", "");
              localStorage.setItem("password", "");
              setLoginState("ورود");
          }
      };
      const expand = "md";
      return (
        <Navbar
          expand={expand}
          className="mb-3"
        >
          <Container fluid="md">
            <Navbar.Brand
              href="#"
            >
              نکست وان کد
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-link">
                    صفحه اصلی
                  </NavLink>
                  <NavLink to="/about" className="nav-link">
                    درباره ما{" "}
                  </NavLink>
                  <NavLink to="/articles" className="nav-link">
                    مقالات
                    </NavLink>
                            {isLogin() && (
                                <NavLink to="/panel" className="nav-link">
                                    پنل
                                </NavLink>
                            )}
                            <NavLink to="/login" onClick={clickHandler} className="nav-link">
                                {loginState}
                            </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
    }
    export default MyNavbar;