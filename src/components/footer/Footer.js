import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
export default function App() {
  return (
    <MDBFooter className="footer text-center" color="white">
      <MDBContainer className="p-4">
        <section className="body">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">PRODUCTS</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Watches
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Jewelry
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    High Jewelry
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Special Occasions
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">MAISON PIAGET</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Press Access
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">SERVICES</h5>

              <ul className="list-unstyled mt-20">
                <li>
                  <a href="#!" className="text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Find a boutique
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    My Piaget account
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">COMMUNITY</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <section className="mb-4">
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <Facebook />
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <Instagram />
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <YouTube />
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <LinkedIn />
                    </MDBBtn>
                  </section>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Register to newsletter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    LOCATION
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © NEWGOLDE by Mohammed-Abdo❤ 2023
      </div>
    </MDBFooter>
  );
}
