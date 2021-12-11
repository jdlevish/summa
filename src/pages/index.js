import * as React from "react";
import { Nav, Navbar, Button, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo1.jpg'
import blackLogo from '../images/logo.jpg'
import Intro from '../components/intro.js'
import Propagation from "../components/propagation";
import Compliance from "../components/compliance";
import Pest from "../components/Pest"
import Team from "../components/team"
import ExpCard from "../components/expCard"
import Rellax from 'rellax'

import '../index.css'

const rellax = new Rellax('.rellax')

// const back = { background: `url({wind})` }
const navStyle = { backgroundColor: `black`, borderColor: `#93F36C`, color: `#93F36C`, backgroundColor: 'black', borderColor: '#93F36C', color: '#93F36C' }
const intro = { backgroundColor: `white`, backgroundImage: `url({ wind })` }
const IndexPage = () => {
  return (
    <main className='bgColor ' id='start' >
      <Navbar bg="black" expand="lg" className='navbar-dark sticky-top ' >
        <Container className=''>
          <Navbar.Brand href="#start"><img className="img-fluid" style={{ maxHeight: '3rem' }} src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', color: "white" }}
              navbarScroll
            >
              <Nav.Link href="#start">Home</Nav.Link>
              <Nav.Link href="#propagation">Propagation Program</Nav.Link>
              <Nav.Link href="#metrc">Metrc & Code Compliance</Nav.Link>
              <Nav.Link href="#pest">Integrated Pest Management</Nav.Link>
              <Nav.Link href="#team">Our Team</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>







      <Container className='  pt-3 textStyle g-0'>
        <div className=" pt-1   pb-3  ">
          <img className='img-fluid whiteLogo rounded ' src={blackLogo} />
        </div>
        <div className='row g-0'>
          <Intro className='col cardBg ' ></Intro>
        </div>
        <div id="propagation" className="row pt-5  g-0">
          <Propagation className='col cardBg'></Propagation>
        </div>
        <div id='exp' className="row pt-5 g-0 ">
          <ExpCard className='col-sm-12  cardBg'></ExpCard>
        </div>
        <div id='metrc' className='row pt-5 g-0'>

          <Compliance className='col  cardBg' ></Compliance>
        </div>
        <div id='pest' className="row pt-5 g-0">

          <Pest className='col cardBg'></Pest>

        </div>

        <div className="row pt-5 g-0">
          <div id='team' className='col '>
            <Team ></Team>
          </div>
        </div>
      </Container>


    </main >
  )
}

export default IndexPage
