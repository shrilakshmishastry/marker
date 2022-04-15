import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Row, Nav, Navbar } from "react-bootstrap";
import NavLinkGenerator from "src/presentational/NavLinkGenerator";

import {
  useGetLocalStorage,
  useSetLocalStorage,
} from "src/customhooks/getLocalStorage";
const linkStyle = "me-lg-5  text-center mb-3 mb-lg-0";

const TopNavBar = ({ themeSwitcher }) => {
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(useGetLocalStorage());
  }, [theme]);

  return (
    <React.Fragment>
      <Navbar
        bg={theme === "light" ? "light" : "dark"}
        className="topNavBar shadow-sm"
        expand="lg"
      >
        <Container className="topNavBar-container">
          <Navbar.Brand className="brandText">
            <span className="fs-4 brandLeadingText">M</span>arker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="marker_navbar" />
          <Navbar.Collapse className="" id="marker_navbar ">
            <Nav className="ms-auto me-auto topNavBar-collapseContent">
              <NavLinkGenerator link={"/"} title="Home" />
              <NavLinkGenerator link={"/recentPost"} title="Recent" />
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Row className="w-100 ">
          <Form className="d-flex flex-row-reverse mt-2 mt-lg-0">
            <Form.Check
              className="text-dark"
              onChange={() => {
                theme === "light"
                  ? (setTheme("dark"),
                    useSetLocalStorage("dark"),
                    document.documentElement.setAttribute("data-theme", "dark"))
                  : (setTheme("light"),
                    useSetLocalStorage("light"),
                    document.documentElement.setAttribute(
                      "data-theme",
                      "light"
                    ));
              }}
              type="switch"
              id="themer"
              lable="themer"
            />
          </Form>
        </Row>
      </Navbar>
    </React.Fragment>
  );
};
export default TopNavBar;
