import * as React from "react";
import '../index.css'
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
import Contact from '../components/contact'





// const back = { background: `url({wind})` }
const navStyle = { backgroundColor: `black`, borderColor: `#93F36C`, color: `#93F36C`, backgroundColor: 'black', borderColor: '#93F36C', color: '#93F36C' }
const intro = { backgroundColor: `white`, backgroundImage: `url({ wind })` }
const IndexPage = () => {
  return (
    <main className='bgColor ' id='start' >
      <Navbar bg="black" collapseOnSelect={true} expand="lg" className='navbar-dark sticky-top  '  >
        <Container className=''>
          <Navbar.Brand href="#start"><img className="img-fluid" style={{ maxHeight: '3rem' }} src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll ">
            <Nav

              className="me-auto my-2 my-lg-0    multi-collapse"
              style={{ maxHeight: '100px', color: "white" }}
              navbarScroll
            >
              <Nav.Link href="#start" data-toggle="collapse" data-target=".multi-collapse">Home</Nav.Link>
              <Nav.Link href="#propagation" data-toggle="collapse" data-target=".multi-collapse">Propagation Program</Nav.Link>
              <Nav.Link href="#metrc" data-toggle="collapse" data-target=".multi-collapse">Metrc & Code Compliance</Nav.Link>
              <Nav.Link href="#pest" data-toggle="collapse" data-target=".multi-collapse">Integrated Pest Management</Nav.Link>
              <Nav.Link href="#team" data-toggle="collapse" data-target=".multi-collapse">Our Team</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>







      <div className='container-fluid container-xxl pt-3 textStyle g-0'>
        <div data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className=" pt-1   pb-3 d-flex justify-content-center">
          <img className=' whiteLogo  ' src={blackLogo} />
        </div>
        <div data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className='row g-0'>
          <Intro className='col cardBg ' ></Intro>
        </div>
        <div id="propagation" data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className="row pt-3  g-0" >
          <Propagation className='col cardBg pt-5'></Propagation>
        </div>
        <div id='exp' data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className="row pt-3 g-0 ">
          <ExpCard className='col-sm-12  cardBg '></ExpCard>
        </div>
        <div id='metrc' data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className='row pt-3 g-0'>

          <Compliance data-sal='slide-left' data-sal-delay="3000" data-sal-easing="ease" className='col  cardBg pt-5' ></Compliance>
        </div>
        <div id='pest' data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className="row pt-3 g-0">

          <Pest data-sal='slide-left' className='col cardBg'></Pest>

        </div>

        <div id='team' className="row pt-3 g-0">

          <Team className='col'></Team>

        </div>
        <div id='contact' className="row pt-3 g-0 pb-5">

          <Contact className='col '></Contact>

        </div>
      </div>
      <div>

      </div>

    </main >
  )
}

export default IndexPage
