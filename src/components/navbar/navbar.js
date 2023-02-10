import React, { Fragment } from "react";
import "./navbar.css";
import Checkbox from "@mui/material/Checkbox";
import {
  Offcanvas,
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import Searsh from "./Searsh";
import { LocalPhone, Favorite, FavoriteBorder } from "@mui/icons-material";
const navbar = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand>
            <a href="/" className="searsh">
              <LocalPhone />
            </a>
            <Searsh />
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </Navbar.Brand>
          <Navbar.Brand className="title-web-average">NEWGOLDE</Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                NEWGOLDE
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">CHOP</Nav.Link>
                <Nav.Link href="#action2">TRADE/SELL</Nav.Link>
                <NavDropdown title="WHY NEWGOLDE">
                  <NavDropdown.Item href="#action3">1</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">CAREERS</Nav.Link>
                <Nav.Link href="#action2">SERVICE</Nav.Link>
                <Nav.Link href="#action2">STORES</Nav.Link>
                <Nav.Link href="#action2">BUY100%ONLINE</Nav.Link>
                <Nav.Link href="#action1" className="title-web">
                  NEWGOLDE
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default navbar;
