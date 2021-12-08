import * as React from "react";
import { Nav, Navbar, Button, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo1.jpg'
import whiteLogo from '../images/summawhite.jpg'
import Intro from '../components/intro.js'
import Propagation from "../components/propagation";
import Compliance from "../components/compliance";
import Pest from "../components/Pest"
import Team from "../components/team"
import Rellax from 'rellax'
import wind from '../images/wind.jpg'
import '../index.css'

const rellax = new Rellax('.rellax')

// const back = { background: `url({wind})` }
const navStyle = { backgroundColor: `black`, borderColor: `#93F36C`, color: `#93F36C`, backgroundColor: 'black', borderColor: '#93F36C', color: '#93F36C' }
const intro = { backgroundColor: `white`, backgroundImage: `url({ wind })` }
const IndexPage = () => {
  return (
    <main >
      <Navbar bg="black" expand="lg" className='navbar-dark' >
        <Container >
          <Navbar.Brand href="#"><img className="img-fluid" style={{ maxHeight: '3rem' }} src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', color: "white" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#propagation">Propagation Program</Nav.Link>
              <Nav.Link href="#metrc">Metrc & Code Compliance</Nav.Link>
              <Nav.Link href="#pest">Integrated Pest Management</Nav.Link>
              <Nav.Link href="#team">Our Team</Nav.Link>

              {/* <NavDropdown title="N" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container >
        <div className="text-center pt-5 ">
          <img className='img-fluid' src={whiteLogo} />
        </div>
        <div className="text-center pt-3">
          <h2>"We stand for the highest standards"</h2>
        </div>
      </Container>

      <Container >
        <div className='row'>
          <Intro className='col' ></Intro>
        </div>
        <div id="propagation" className="row">
          <Propagation className='col'></Propagation>
        </div>
        <div id='metrc' className='row'>

          <Compliance className='col' ></Compliance>
        </div>
        <div id='pest' className="row">

          <Pest className='col'></Pest>

        </div>
        <div className="row pt-4">
          <div id='team' className='col'>
            <Team></Team>
          </div>
        </div>
      </Container>


    </main >
  )
}

export default IndexPage
