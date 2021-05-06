
import React, { useState, us, useRef, useEffect } from "react";
import classnames from "classnames";
import AsyncSelect from 'react-select/async';
import { Button, Card, Container, Row, Col, FormGroup, Input, Nav, NavItem, NavLink, TabContent, TabPane, } from "reactstrap";


import DemoNavbar from "../components/Navbars/DemoNavbar";
import SimpleFooter from "../components/Footers/SimpleFooter.js";
import { Loader } from '../components/Loader';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const customStyles = {
  indicatorSeparator: () => ({
    display: 'none'
  }),
}

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];



const Profile = () => {

  const main = useRef(null);
  const [plainTabs, setplaneTabs] = useState(1);
  const [inputValue, setInputValue] = useState('');

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setplaneTabs(index);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue(inputValue);
    return inputValue;
  };

  const filterColors = (inputValue) => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    scrollToRef(main);
    return () => {
      main.current = false;
      setplaneTabs(1);
      setInputValue('');
    }
  }, [main]);

  return (
    <>
      <Loader />
      <DemoNavbar />
      <main className="profile-page" ref={main}>
        <section className="section-profile-cover section-shaped my-0">
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-end">

                  {/* <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    > */}
                  <div className="card-profile-stats  mt-lg-0">

                    <Button
                      className="float-right"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="md"
                    >
                      Disable Notification
                        </Button> 
                  </div>
                  {/* </Col> */} 
                </Row>
                <Row >
                  <Col md="6">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Name</small>
                    <FormGroup>
                      <Input type="text" name="name" id="name" placeholder="Name" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <small className="d-block text-uppercase font-weight-bold mb-3">
                      Mobile No</small>
                    <FormGroup>
                      <Input type="text" name="mobile_no" id="mobile_no" placeholder="Mobile No." disabled />
                    </FormGroup>
                  </Col>

                  <Col>
                    <small className="d-block text-uppercase font-weight-bold">
                      Choose Type</small>
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-selected={plainTabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: plainTabs === 1
                            })}
                            onClick={e => toggleNavs(e, "plainTabs", 1)}
                            href="#pablo"
                            role="tab"
                          >By District
                        </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={plainTabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: plainTabs === 2
                            })}
                            onClick={e => toggleNavs(e, "plainTabs", 2)}
                            href="#pablo"
                            role="tab"
                          >By Pincode</NavLink>
                        </NavItem>

                      </Nav>
                    </div>
                    <div>
                      <TabContent activeTab={"plainTabs" + plainTabs}>
                        <TabPane tabId="plainTabs1">
                          <Row>

                            <Col md="6">
                              <small className="d-block text-uppercase font-weight-bold mb-3">
                                State</small>
                              <FormGroup>
                                {/* <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input> */}
                                <AsyncSelect
                                  styles={customStyles}
                                  cacheOptions
                                  loadOptions={loadOptions}
                                  defaultOptions
                                  onInputChange={handleInputChange}
                                  isClearable
                                />

                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <small className="d-block text-uppercase font-weight-bold mb-3">
                                District</small>
                              <FormGroup>
                                <AsyncSelect
                                  styles={customStyles}
                                  cacheOptions
                                  loadOptions={loadOptions}
                                  defaultOptions
                                  onInputChange={handleInputChange}
                                  isClearable
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                        </TabPane>
                        <TabPane tabId="plainTabs2">
                          <Col md="6">
                            <small className="d-block text-uppercase font-weight-bold mb-3">
                              Pincode</small>
                            <FormGroup>
                              <AsyncSelect
                                styles={customStyles}
                                cacheOptions
                                loadOptions={loadOptions}
                                defaultOptions
                                onInputChange={handleInputChange}
                                isClearable
                              />
                            </FormGroup>
                          </Col>
                        </TabPane>
                      </TabContent>
                    </div>
                  </Col>

                </Row>
                <Row className="justify-content-center">
                  {/* <div className="text-center"> */}
                  <Button
                    className="my-4"
                    color="success"
                    type="button"
                  >
                    Submit
                  </Button>
                  {/* </div> */}
                </Row>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default Profile;
